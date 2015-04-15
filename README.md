Bit.ly Custom Basic Shortening Page
====

Quick and dirty form to generate custom short urls.


Demo
----

http://rdal.es/link/


Installation
----

- Follow [BitlyPHP](https://github.com/Falicon/BitlyPHP) instructions to setup API key and login for includes/[bitly.php](https://github.com/RobertDaleSmith/bitly-custom/blob/master/includes/bitly.php#L16).
- In [shorten.php](https://github.com/RobertDaleSmith/bitly-custom/blob/master/shorten.php#L7), add your [bitly token](https://bitly.com/a/oauth_apps).
- In [index.html](https://github.com/RobertDaleSmith/bitly-custom/blob/master/index.html#L40), replace 'rdal.es' with your custom domain used on bit.ly.
- Spin it up on the PHP server of your choice and enjoy.


TODO
----

- URL input validation
- Bitly API error handling


Includes
----

[Falicon/BitlyPHP](https://github.com/Falicon/BitlyPHP)

[AlexisTM/Simple-Json-PHP](https://github.com/AlexisTM/Simple-Json-PHP)
