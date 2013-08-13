<!DOCTYPE html>
<!-- saved from url=(0062)http://websnooker.com/index.php?id=6bc884-f18bfd-605137&host=1
-->
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Web Snooker - [ijibu] vs [hui]</title>
		<link type="text/css" href="css/style.css" media="screen" rel="stylesheet">
		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="ie8.css" />
		<![endif]-->
		<script type="text/javascript">
			var LANG = {
				'code': 'zh',
				'name': 'Chinese'
			};
			if (top !== self) top.location.replace(self.location.href);
		</script>
		<script type="text/javascript" src="js/jquery1.4.2.js"></script>
		<script type="text/javascript" src="js/config.js"></script>
		<script type="text/javascript" src="js/util.js"></script>
		<script type="text/javascript" src="js/object.js"></script>
		<script type="text/javascript" src="js/network.js"></script>
		<script type="text/javascript" src="js/snooker.min.min.js"></script>
		<link class="skin" rel="stylesheet" type="text/css" href="css/default.css">
	</head>
	<body style="overflow-y: scroll; overflow-x: hidden; background-color: rgb(133, 89, 38); background-image: url(./images/light-yellow.jpg);">
		<div id="loading-screen" style="display: none;">
			<div class="icon">
				<div class="progress-bar" style="width: 80%; display: block;">
				</div>
			</div>
		</div>
		<div id="community">
			<div id="community-menu" class="black-box">
				<div class="top-panel">
					<div class="hint">
						<strong>Community</strong>
					</div>
				</div>
				<ul class="categories">
					<li>
						<a href="http://www.html5.com/game/WebSnooker/index.php?id=6bc884-f18bfd-605137&host=1#webchat">
							[<strong>I</strong>]RC / Chat
						</a>
					</li>
					<li>
						<a href="index.php?id=6bc884&host=1#news">News</a>
					</li>
					<li>Media>
					<li>
						<a href="/index.php?id=605137&host=1#welcome-screen">About</a>
					</li>
					<li>
						<a href="/index.php?id=605137&host=1#credits">Credits</a>
					</li>
				</ul>
			</div>
			<!-- #community-menu - end -->
			<div class="wrapper topmost" style="display: none;">
				<div id="welcome-screen" class="black-box">
					<h2>
						Welcome to
						<span class="color-1">WebSn</span>
						oo
						<span class="color-1">ker!</span>
					</h2>
					<p>
						<strong>Websnooker</strong>
						is a
						<strong>free online</strong>
						web-based snooker game currently in a
						<strong>playable alpha stage</strong>
						. In case of any bugs please use "
						<strong>leave feedback</strong>
						" widget. Thank you!
					</p>
					<p>
						<strong>Simplified snooker rules</strong>
						are available under the [<strong>R</strong>] key during the game.
					</p>
					<p>
						<strong>Controls help</strong>
						is available under [<strong>H</strong>] key.
					</p>
					<p>
						You can change your<strong>game settings</strong>
						anytime in the settings by pressing [<strong>S</strong>] key.
					</p>
					<div class="actions">
						<ul>
							<li><button name="welcome">OKAY!</button></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- #welcome-screen about - end -->
			<div id="irc-webchat" class="black-box closed">
				<div class="top-panel">
					<div class="toggle"></div>
					<div class="hint">[<strong>I</strong>]RC</div>
				</div>
			</div>
			<!-- #irc - end -->
			<div class="wrapper topmost closed">
				<div id="news" class="black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint"><strong>News</strong></div>
					</div>
					<ul>
						<li>
							<time>January 4th, 2011</time>
							<h2>Brief announcement</h2>
							<p>
								Hi! We're happy to announce that websnooker claimed the award of the
								<strong>best polished</strong>
								game on the
								<a href="http://gaming.mozillalabs.com/">Game On</a>
								competition held by Mozilla Labs! Thanks to everyone who contributed!
							</p>
							<p>
								Other than that we're currently working on improving what's there already.
								<strong>
									We have just updated Websnooker with some bugfixes and cosmetic gameplay
									changes.
								</strong>
							</p>
							<p>
								One of the next things we'll be focusing on are different
								<strong>game modes</strong>
								. Since everyone loves 8-ball so much this is our closest target.
							</p>
							<p>
								Please remember this is alpha and if you happen to find some bugs please
								let us know, either via feedback button on the right or on irc channel
								-
								<strong>#websnooker @ quakenet.org</strong>
							</p>
							<p>
								We will be back with some more updates sometime soon!
							</p>
							<p style="text-align: right;font-style: italic;">
								Websnooker team
							</p>
						</li>
					</ul>
					<div class="actions">
						<ul>
							<li><button name="okay">OKAY!</button></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- #news - end -->
			<div class="wrapper topmost closed">
				<div id="credits" class="black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint"><strong>Credits</strong></div>
					</div>
					<div class="container">
						<p>
							WebSnooker.com is developed by
							<a href="http://pordesign.eu/">
								<img src="images/pordesign-logo.jpg" alt="pordesign">
							</a>
						</p>
						<p>
							Łukasz Pietrzak
							<br>
							Sebastian Krośkiewicz
							<br>
							Mateusz Jastrzębski
							<br>
							Mateusz Wilczewski
						</p>
					</div>
					<div class="actions">
						<ul>
							<li><button name="okay">OKAY!</button></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- #credits - end -->
		</div>
		<!-- #community - end -->
		<div id="game-container">
			<div id="pool">
				<canvas width="1067" height="600" id="screen"></canvas>
			</div>
			<div id="scoreboard" class="compact">
				<div id="players">
					<div class="p1 current">
						<img src="images/zh.gif" class="lang">
						<div class="name">ijibu</div>
						<div class="score">12</div>
						<div class="time-left">00:00</div>
					</div>
					<div class="p2">
						<div class="name"></div>
						<div class="score">0</div>
						<div class="time-left">00:00</div>
					</div>
				</div>
				<div id="frame-info">
					<div id="frame-time">frame time: 58:02</div>
					<div id="current-break">break: 0</div>
					<div id="frame-count">
						0(<strong>0</strong>)0
					</div>
				</div>
			</div>
			<!-- #scoreboard - end -->
			<div id="power-bar-wrapper">
				<div id="power-bar">
					<div id="power-meter" style="height: 377px;"></div>
				</div>
			</div>
			<!-- #power-bar - end -->
			<div id="frame-stats" class="black-box closed">
				<div class="top-panel">
					<div class="toggle"></div>
					<div class="hint">
						<strong>[F]</strong>rame stats
					</div>
				</div>
				<div class="container">
					<dl>
						<dt class="points-remaining">Remaining points on table:</dt>
						<dd><span>99</span></dd>
					</dl>
				</div>
			</div>
			<!-- #frame-stats - end -->
			<div id="help" class="black-box closed">
				<div class="top-panel">
					<div class="toggle"></div>
					<div class="hint"><strong>[H]</strong>elp</div>
				</div>
				<div class="container">
					<div id="controls">
						<dl>
							<dt><strong>LMB</strong>release</dt>
							<dd>Shot</dd>
							<dt>
								<strong>-</strong>/<strong>+</strong>,<strong>LMB</strong>on powerbar or
								<strong>mouse wheel</strong>or<strong>[1] to [0]</strong>keys
							</dt>
							<dd>adjust shot power</dd>
							<dt><strong>F11</strong></dt>
							<dd>fullscreen</dd>
						</dl>
					</div>
				</div>
			</div>
			<!-- #help - end -->
			<div class="wrapper topmost closed">
				<div id="rules" class="black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint"><strong>[R]</strong>ules</div>
					</div>
					<div class="container">
						<p>The basics</p>
						<ul>
							<li>
								<strong>
									You always hit the
									<img src="images/white.png" alt="white ball" width="18px">
									(cue) ball
								</strong>
								and pot other balls with it.
							</li>
							<li>
								<strong>
									When there are
									<img src="images/red.png" alt="red ball" width="18px">
									balls on the table
								</strong>
								: Pot
								<img src="images/red.png" alt="red ball" width="18px">
								and any other color
								<strong>
									alternately
								</strong>
								until all red balls are gone.
								<img src="images/red.png" alt="red ball" width="18px">
								are worth 1 point; For colors you get:
								<img src="images/yellow.png" alt="yellow ball" width="18px">
								(2pts) -
								<img src="images/green.png" alt="green ball" width="18px">
								(3pts)-
								<img src="images/brown.png" alt="brown ball" width="18px">
								(4pts) -
								<img src="images/blue.png" alt="blue ball" width="18px">
								(5pts) -
								<img src="images/pink.png" alt="pink ball" width="18px">
								(6pts) -
								<img src="images/black.png" alt="black ball" width="18px">
								(7pts).
							</li>
							<li>
								<strong>
									If you can't make a pot
								</strong>
								: Do your best to leave the table to your opponent the way it is harder
								for him to make a good move.
							</li>
							<li>
								<strong>
									Colors are placed back
								</strong>
								to their original spot after they've been potted if there are still any
								reds left.
							</li>
							<li>
								<strong>
									When all reds are gone:
								</strong>
								Colors are to be potted when all red balls are gone. Potting order is
								<img src="images/yellow.png" alt="yellow ball" width="18px">
								(2pts) -
								<img src="images/green.png" alt="green ball" width="18px">
								(3pts)-
								<img src="images/brown.png" alt="brown ball" width="18px">
								(4pts) -
								<img src="images/blue.png" alt="blue ball" width="18px">
								(5pts) -
								<img src="images/pink.png" alt="pink ball" width="18px">
								(6pts) -
								<img src="images/black.png" alt="black ball" width="18px">
								(7pts)..
							</li>
						</ul>
						<p>
							The Dont's
						</p>
						<ul>
							<li>
								Don't pot multiple colors at a time. Potting multiple
								<img src="images/red.png" alt="red ball" width="18px">
								<img src="images/red.png" alt="red ball" width="18px">
								is fine.
							</li>
							<li>
								Avoid potting the
								<img src="images/white.png" alt="white ball" width="18px">
								ball.
							</li>
						</ul>
						<p>
							A snooker:
						</p>
						<ul>
							<li>
								There's a snooker when the striker (either you or your opponent)
								<strong>
									can't make a direct hit
								</strong>
								of a ball he must play because it is obscured by other balls. The better
								the snooker, the bigger the chances of faul and/or the other side taking
								over.
							</li>
						</ul>
						<p>
							Other
						</p>
						<ul>
							<li>
								Some more hints are displayed during the game on a few specific ocasions,
								try to follow them.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- #rules - end -->
			<div class="wrapper topmost closed">
				<div id="match-options" class="black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint">Match<strong>[O]</strong>ptions</div>
					</div>
					<div class="container">
						<div class="actions">
							<ul>
								<li><button name="surrender">Surrender frame</button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- #match-options - end -->
			<div id="console" class="closed">
				<div class="top-panel">
					<div class="toggle"></div>
					<div class="hint">
						<strong>[~]</strong>to toggle<strong>chat &amp; console</strong>
					</div>
				</div>
				<ul class="messages"></ul>
				<div class="input"><input type="text" name="chat" value=""></div>
			</div>
			<!-- #console - end -->
			<div class="wrapper topmost closed">
				<div id="dashboard" class="black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint">
							<strong>[D]</strong>ashboard
						</div>
					</div>
					<div id="player-count">
						0 players in 0 servers
					</div>
					<ul id="options">
						<li>
							<button name="host"><strong>Host Game</strong></button>
						</li>
						<li>
							<button name="join" disabled="">Join Game</button>
						</li>
						<li>
							<button name="refresh">Refresh</button>
						</li>
						<li>
							<button name="practice">Practice</button>
						</li>
						<li>
							<input type="text" name="filter" value="Filter Servers" class="tip">
						</li>
					</ul>
					<div id="servers">
						<p class="status">
							No games found.
							<a class="host" href="http://websnooker.com/index.php?id=6bc884-f18bfd-605137&host=1#host">
								Start one?
							</a>
						</p>
						<table>
							<tbody>
								<tr>
									<th width="30%">Server Name</th>
									<th width="5%">Pass</th>
									<th width="7%">Frames</th>
									<th width="11%">Shot time</th>
									<th width="13%">Game Mode</th>
									<th width="17%">Host Player</th>
									<th width="17%">Client Player</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="lounge black-box">
						<div class="top-panel">
							<div class="hint">
								<strong>Lounge</strong>
								-
								<span>no players in it</span>
								.
								<img src="images/info-icon.png" width="22" alt="">
								<strong>Select</strong>a player and Host Game to
								<strong>invite</strong>him to a match.
							</div>
						</div>
						<div class="container">
							<ul class="players"></ul>
						</div>
					</div>
					<div class="wrapper closed">
						<div id="host-server" class="settings black-box">
							<table>
								<tbody>
									<tr>
										<th>Server Name</th>
										<td><input type="text" name="server_name" value="Snooker server"></td>
									</tr>
									<tr>
										<th>Password</th>
										<td><input type="password" name="server_password" value=""></td>
									</tr>
									<tr>
										<th>Game Mode</th>
										<td>
											<select name="gamemode">
												<option value="snooker">Full Snooker</option>
												<option value="short-snooker">Short Snooker</option>
												<option value="mini-snooker">Mini Snooker</option>
											</select>
										</td>
									</tr>
									<tr>
										<th>Frames</th>
										<td>
											<select name="frames">
												<option value="1">1</option>
												<option value="3">3</option>
												<option value="5">5</option>
												<option value="7">7</option>
												<option value="9">9</option>
												<option value="11">11</option>
											</select>
										</td>
									</tr>
									<tr>
										<th>Shot time</th>
										<td>
											<select name="shottime">
												<option value="0">Unlimited</option>
												<!--<option value="300">5min</option>
												<option value="180">3min</option>
												<option value="60">1min</option>
												<option value="45">45s</option>
												<option value="30">30s</option>
												<option value="15">15s</option>-->
											</select>
										</td>
									</tr>
								</tbody>
							</table>
							<div class="actions">
								<ul>
									<li>
										<button name="cancel">Cancel</button>
									</li>
									<li>
										<button name="start"><strong>Start Server</strong></button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="wrapper closed">
						<div id="enter-password" class="settings black-box">
							<div class="top-panel">
								<div class="hint">Enter password</div>
							</div>
							<table>
								<tbody>
									<tr>
										<th>Password</th>
										<td><input type="password" name="client_password" value=""></td>
									</tr>
								</tbody>
							</table>
							<div class="actions">
								<ul>
									<li><button name="cancel">Cancel</button></li>
									<li>
										<button name="join"><strong>Join Server</strong></button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wrapper topmost closed">
				<div id="settings" class="settings black-box">
					<div class="top-panel">
						<div class="toggle"></div>
						<div class="hint"><strong>[S]</strong>ettings</div>
					</div>
					<table>
						<tbody>
							<tr class="highlight">
								<th>Name</th>
								<td><input type="text" name="player" value=""></td>
							</tr>
							<tr>
								<th>Skin</th>
								<td>
									<select name="skin">
										<option value="default">Default</option>
										<!--<option value="satan">Satan</option>-->
									</select>
								</td>
							</tr>
							<tr>
								<th>Background</th>
								<td>
									<select name="background">
										<option value="default">Default</option>
										<option value="blue">Blue</option>
										<option value="red">Red</option>
										<option value="darkred">Dark Red</option>
										<option value="darkred2">Dark Red 2</option>
										<option value="black">Black</option>
										<option value="lightyellow">Yellow</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Scoreboard style</th>
								<td>
									<select name="scoreboard-style">
										<option value="extended">Default</option>
										<option value="compact">Compact</option>
										<option value="classic">Classic</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Scoreboard position</th>
								<td>
									<label>
										<input type="radio" name="scoreboard-position" value="top">Top
									</label>
									<label>
										<input type="radio" name="scoreboard-position" value="bottom">Bottom
									</label>
								</td>
							</tr>
							<tr>
								<th>Sound</th>
								<td><input type="checkbox" name="sound"></td>
							</tr>
							<!--<tr>
							<th>Sound Volume</th>
							<td><div class="sound-volume"><div class="handle"></div></div></td>					
							</tr>-->
							<tr>
								<th>Shadows</th>
								<td><input type="checkbox" name="shadows"></td>
							</tr>
							<tr>
								<th>Cue</th>
								<td><input type="checkbox" name="cue"></td>
							</tr>
							<tr>
								<th>Hints</th>
								<td><input type="checkbox" name="hints"></td>
							</tr>
						</tbody>
					</table>
					<div class="actions">
						<ul>
							<li><button name="cancel">Cancel</button></li>
							<li><button name="save"><strong>Save changes</strong></button></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="wrapper topmost closed">
				<div id="enter-name" class="settings black-box">
					<div class="top-panel">
						<div class="hint">Enter your name to play</div>
					</div>
					<table>
						<tbody>
							<tr>
								<th>Name</th>
								<td><input type="text" name="player" value=""></td>
							</tr>
						</tbody>
					</table>
					<div class="actions">
						<ul>
							<li>
								<button disabled="" name="save"><strong>Play WebSnooker</strong></button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="wrapper topmost" style="display: none;">
				<div id="browser-detect" class="black-box">
					<h2>Compatibility check...</h2>
					<p>
						Ooops, unfortunately we've detected that your browser is not capable of
						running WebSnooker.
					</p>
					<p>
						You need one of the following browsers to run WebSnooker (the more up
						to date version, the better. If you have one of these and still see this
						message you need to update it):
					</p>
					<ul>
						<li>
							<a href="http://www.google.com/chrome/intl/en/landing_chrome.html?hl=en">Google Chrome</a>
						</li>
						<li>
							<a href="http://www.opera.com/">Opera</a>
						</li>
						<li>
							<a href="http://www.mozilla.com/">Mozilla Firefox</a>
							(3.5+ may perform a bit slow.
							<strong>4 beta recommended where possible</strong>)
						</li>
						<li>
							<a href="http://www.apple.com/safari/">Apple Safari</a>
						</li>
					</ul>
					<p>Hope to see you again!</p>
				</div>
			</div>
			<!-- #browser-detect - end -->
			<div class="wrapper topmost closed">
				<div class="common-popup black-box invitation">
					<div class="top-panel">
						<div class="hint">Invitation to a match</div>
					</div>
					<div class="container">
						<p>
							You have been invited by<span>Plebs</span>to a match (
							<span>Game mode: Full snooker, Frames: 3, Shot time: unlimited</span>)
						</p>
					</div>
					<div class="actions">
						<ul>
							<li><button name="decline">Decline</button></li>
							<li><button name="accept">Accept</button></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="wrapper topmost closed">
				<div class="common-popup black-box practice">
					<div class="top-panel">
						<div class="hint">Game info</div>
					</div>
					<div class="container">
						<p>
							You can shoot around while you wait for your opponent. As soon as he shows
							up, the frame will restart.
						</p>
					</div>
					<div class="actions">
						<ul>
							<li><button name="ok">OK</button></li>
						</ul>
					</div>
				</div>
			</div>
		</div>		
	</body>
</html>