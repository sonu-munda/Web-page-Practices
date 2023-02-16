<html>
    <head>
        <title></title>
    </head>
    <body>
        <script>
        
            const name="harry";
            const greeting = "Good morning";
            console.log(greeting + name);
        //TEMPLATE LITERALS

        let fruit1= 'orange';
        let fruit2  = 'apple';
        let myHtml= 'hello ${name}
                <h1>This is heading</h1>
                <p>You like ${fruit1} and ${fruit2}'';</p>
               
        </script>
        document.body.innerHTML = myHtml;
        
    </body>
</html>