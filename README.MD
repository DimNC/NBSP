# Automatic non-breakable spaces
Html is primarily made for english language. For other languages, such as french, there are different rules for punctuation, spaces and things like that. For instance, there's a space before the question or interrogation marks, which isn't there in english! That space should be non-breakable to avoid solitary exclamation/question mark on the next line.

Here's a javascript file that will deal with the non-breakable spaces if you write in french.

## Step-by-step
1. Put "nbsp.js" somewhere in your website folder.
2. In each html page, add a line to refer to it (better by the end of the document):
`<script type="text/javascript" src="js/nbsp.js"></script>`
