<html>

<head>
    <script type="text/javascript" src="scripts/embedding.js"></script>
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1,maximum-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Language" content="en">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-113483407-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-113483407-1');

    </script>
    <title>How do I embed a Google Photos album into a website?</title>
    <base href="https://www.publicalbum.org/" />
    <link rel="stylesheet" type="text/css" href="css/site.min.css" />
</head>

<body>
    <div class="widget insert">
        <div class="widget-header">
            <label for="input">Create gallery from link:</label>
        </div>
        <div class="input">
            <input id="input" placeholder="Insert Google Photo link for share" value="https://goo.gl/photos/ApSvd4CU4UJVT9jd8" />
        </div>


        <div class="attributes">
            <label>Additional options:</label>
            <div class="attribute checkbox col2" style="display:none;">
                <label><input id="checkbox_allow_fullscreen" type="checkbox" checked />Allow fullscreen</label>
            </div>
            <div class="attribute checkbox col2" style="display:none;">
                <label><input id="checkbox_allow_slideshow" type="checkbox" checked />Allow slideshow</label>
            </div>
            <div class="attribute checkbox col2" style="display:none;">
                <label><input id="checkbox_autoplay" type="checkbox" />Autoplay slideshow</label>
            </div>
            <div class="attribute text col2">
                <label>Slideshow delay</label><input id="input_delay" type="text" placeholder="5" value="5" /><span>sec.</span>
            </div>
            <div class="attribute checkbox">
                <label><input id="checkbox_repeat" type="checkbox" />Repeat slideshow</label>
            </div>
            <div class="attribute checkbox col2" style="display:none;">
                <label><input id="checkbox_shuffle" type="checkbox" />Shuffle slideshow</label>
            </div>
            <div class="attribute text col2" style="display:none;">
                <label>Background color</label><input id="input_background_color" type="text" placeholder="#000000" value="#000000" />
            </div>
            <div class="attribute text">
                <label>Width</label><input id="input_width" placeholder="default" value="100%" />
            </div>
            <div class="attribute text col2" style="display:none;">
                <!--
					<label>Controls color</label><input id="input_color" type="text" placeholder="#FFFFFF" value="#FFFFFF" />
-->
            </div>
            <div class="attribute text">
                <label>Height</label><input id="input_height" placeholder="default" value="480" />
            </div>
            <div class="attribute checkbox" style="display:none;">
                <label><input id="checkbox_allow_transparency" type="checkbox" />Allow transparency</label>
            </div>
            <!--
				<div class="attribute checkbox">
					<label><input id="checkbox_cdn" type="checkbox" checked />Use CDN</label>
				</div>
-->
        </div>


        <div class="button">
            <button id="button">Create gallery code</button>
        </div>
    </div>
    <!-- /Insert link widget -->


    <!-- Error messae widget -->
    <div id="error-container" class="widget error hide">
        <div class="widget-header">
            <h6 class="title">Error</h6>
        </div>
        <p id="error-content">Ups, something is wrong.</p>
    </div>
    <!-- /Error messae widget -->


    <!-- Embended HTML code widget -->
    <div id="code-container" class="widget code hide">
        <div class="widget-header">
            <h6 class="title">Embendded HTML code</h6>
            <button id="code-copy-button">Copy code into clipboard</button>
        </div>
        <code id="code-content"></code>
    </div>
    <!-- /Embended HTML code widget -->


    <!-- Gallery preview widget -->
    <div id="preview-container" class="widget preview hide">
        <div class="widget-header">
            <h6 class="title">Preview of gallery</h6>
        </div>
        <div id="preview-content"></div>
    </div>
    <!-- /Gallery preview widget -->
    <script>embedding_google_photos_albums('widget')</script>
</body>

</html>
