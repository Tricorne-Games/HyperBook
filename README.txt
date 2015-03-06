HyperBook: Portable Browser-Powered Book System
2015 by Tricorne Games



REQUIREMENTS

To meet W3C standards, this system was written in HTML5, CSS3, and JavaScript (including the jQuery library). It should be able to run on any modern browser. Editing the project can be done with your IDE of choice.



DISCLAIMER

HyperBook is freely usable software, designed to write a portable web-powered book. You may use it and modify it to best suit your needs, including commercial use.

The license included is only to preserve the authorship of this base. It is not required to include it for your games (because this code is designed to get strongly altered to become a work of one's own), but a courtesy credit is highly appreciated.



ABOUT

HyperBook is a package of web files designed to be a portable, digital book, principally to help game designers write and distribute tabletop RPG games with clear, concise, and accessible markup, but it can also be used for any bookwriting project using the same techniques (cookbooks, novels, etc.). The perk is that this package is essentially a basic website, so you can easily load this up on a host and it will run anywhere you hop on a browser and locate it.

index.htm is the main file. This contains the interface layout. This is what a web browser reads first on a domain, and is named that for this reason. When running locally, this is the file you want to run to read the book.

/pages/ is the directory where the individual HTML files that render as a page inside the index.htm are stored. This helps make the writer of the book have a lot of control in writing text where they want the precision of web markup to write things like tables, image holders, text bodies, side notes, and more. A sample /img/ directory is stored so the user can throw all the image in there and fetch them inside the page text. However, being a mutable platform, the user can lay out whatever they like.

/data/ is where the CSS and JavaScript files get stored so they are out of the way of the rest of the book. The main.css file stylizes the index.htm content, the renderpage.js file runs the page-loading system inside the index.htm, and this package includes a local jQuery package so the author has even more power to make the book system nice and lively.