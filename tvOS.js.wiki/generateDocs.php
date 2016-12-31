<?php
define('_new',      '💡');
define('_todo',     '📝');
define('_warning',  '⚠️' );
define('_internal', '⛔️');
define('_donotuse', '🚧');

$wiki_file = 'tvOS.js-Function-list.md';
$file      = '../Server/tvOS.js';

$file      = file_get_contents($file);

$functionlist = "<table>";

// Get the comments (yes)
preg_match_all("#/\*[^*]*\*+([^/][^*]*\*+)*/#", $file, $comtest);

// Get the function definitions
preg_match_all("#(.*)\: function\s?\((.*)?\)#", $file, $rettest); // With extra '  '

function fullText ( $fromArray, $start )
{
	$myTemp=null;
	for ($i=$start; $i < sizeof($fromArray); $i++) { 
		$myTemp .= " " . $fromArray[$i];
	}
	return substr($myTemp, 1);
}

function startsWith ($needle, $string) {
	return substr($string, 0, strlen($needle)) === $needle;
}

function tvOSFunction($func_name) {
	$ret = translateFunction($func_name);
	$ret .= "(" . explode("(", $func_name)[1];
	return "tvOS." . $ret;
}

function translateFunction($func_name) {
	//CompilationView: function (title, subtitle, text, image, items, buttons)
	$ret = explode(":", $func_name)[0];
	$ret = preg_replace("#\s#", null, $ret);
	return $ret;
}

for ($i = 0; $i < sizeof($rettest[0]); $i++) {
	$isInternal   = false;
	$isNew        = false;
	$isDeprecated = false;
	$isWarning    = false;
	$isToDo       = false;
	$aWiki        = '';
	$example      = '';
	$paramList    = '<table><tr><td>Type</td><td>@var</td><td>Description</td><td>Required</td></tr>';

	$explode_comments = explode("\n", $comtest[0][$i]);
	for ($c = 3; $c < sizeof($explode_comments); $c++) {
		$parse = explode("*", $explode_comments[$c]);
		$extra = explode(" ", $parse[1]);

		if (empty($parse[1]) || $parse[1] === "/") {
			// Ignore
		}
		elseif (substr($parse[1], 0, 2) == " @") {
			$tStr = substr($parse[1], 1);
			if (startsWith('@internal', $tStr)) {
				$isInternal = true;
			}
			if (startsWith('@deprecated', $tStr)) {
				$isDeprecated = true;
			}
			if (startsWith('@example', $tStr)) {
				$example .= '    ' . fullText($extra, 2) . PHP_EOL;
			}
			if (startsWith('@param', $tStr)) {
				//             0     1      2      3   4       5     6
				// Parse:    @param array buttons the buttons (see example)
				// Optional: @param array [buttons] the buttons (see example)

				// Explode:
				$paramList .= '<tr>';
				$paramList .= '<td>' . $extra[2] . '</td>';
				$paramList .= '<td>' . $extra[3] . '</td>';
				$paramList .= '<td>' . fullText($extra, 4) . '</td>';
				$paramList .= '<td>' . (preg_match("#\[#", $extra[3]) ? 'Optional' : 'Required') . '</td>';
				$paramList .= '</tr>';
			}
			echo "PARAM: \"" . substr($parse[1], 1) . "\"" . PHP_EOL;
		}
		else {
			$aWiki .= substr($parse[1], 1) . PHP_EOL.PHP_EOL;
			echo "TEXT: \"" . substr($parse[1], 1) . "\"" . PHP_EOL;
		}
	}

	if ($isInternal)       $wiki = "# " . _internal . ' ' . tvOSFunction($rettest[0][$i]) . "\r\n\r\n";
	elseif ($isNew)        $wiki = "# " . _new .      ' ' . tvOSFunction($rettest[0][$i]) . "\r\n\r\n";
	elseif ($isDeprecated) $wiki = "# " . _warning .  ' ' . tvOSFunction($rettest[0][$i]) . "\r\n\r\n";
	else                   $wiki = "# " . tvOSFunction($rettest[0][$i]) . "\r\n\r\n";
	$wiki .= $aWiki;

	if ($isInternal)   $wiki .= "## Internal function\r\n\r\nPlease do **not** use\r\n\r\n";
	if ($isDeprecated) $wiki .= "## Deprecated function\r\n\r\nPlease do **not** use anymore.\r\n\r\n";

	$paramList .= '</table>';

	// @param list.
	if (strlen($paramList) > (79 + 8))
		$wiki .= "## Parameters\r\n\r\n" . $paramList . "\r\n\r\n";

	// @example
	$wiki .= "## Example\r\n\r\n" . $example . "\r\n\r\n";

	$wiki .= "<br><br>\r\n\r\n[Back to function list](https://github.com/wdg/tvOS.js/wiki/tvOS.js-Function-list)";


	$func_list                     = translateFunction($rettest[0][$i]);
	if ($isInternal)       $myFunc = _internal . ' ' . $func_list;
	elseif ($isNew)        $myFunc = _new .      ' ' . $func_list;
	elseif ($isDeprecated) $myFunc = _warning .  ' ' . $func_list;
	else                   $myFunc = $func_list;
	$functionlist .= "<tr><td>" .
	                      $myFunc .
	                 "</td><td>" .
	                      "<a href='https://github.com/wdg/tvOS.js/wiki/function_" . $func_list . "'>Documentation</a>" .
	                 "</td></tr>";
	file_put_contents('functions/function_' . translateFunction($rettest[0][$i]) . '.md', $wiki);
}

$functionlist .= "</table>";

file_put_contents($wiki_file, $functionlist);
?>