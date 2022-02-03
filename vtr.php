<?php
	if(isset($_GET["item"])){
		$item = $_GET["item"];
	}
	else {
		$item = null; 
	}
	if(isset($_GET["img"])){
		$img = $_GET["img"];
	}
	else {
		$img = null; 
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>VTR</title>

	<script src="https://unpkg.com/ml5@0.3.1/dist/ml5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div id="right">
		<div id="header">Virtual Trial Room</div>
			<div id="item">
				<?php 
					if($item != null){
						switch($item){
							case 'sunglass':
								?>
								<a href="vtr.php?item=sunglass&img=s"><img src="Image/s1.png"></a>
								<?php 
								break;
							case 'tshirt':
								?>
								<a href="vtr.php?item=tshirt&img=t"><img src="Image/t1.png"></a>
								<?php 
								break;
						}
					}
				?>
			</div>
			<div id="menu">
				<a href="vtr.php?item=sunglass">Sunglass</a>
				<a href="vtr.php?item=tshirt">T-Shirt</a>
			</div>
		</div>
		<?php 
			if($img != null){
				switch($img){
					case 's':?>
					<script src="sketchs.js"></script>
					<?php
					break;
					case 't':?>
					<script src="sketcht.js"></script>
					<?php
					break;
				}
			}
			else ?>
				<script src="sketch.js"></script>

</body>
</html>