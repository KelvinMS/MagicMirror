const config = require("../tests/configs/empty_ipWhiteList");

/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "pt",
	locale: "pt-BR",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
            config:{
                showLocation:true,
                timezone:"America/Sao_Paulo"
            }
		},
		{
			module: "calendar",
			header: "Feriados",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
        {
            module: 'MMM-WeatherOrNot',
            position: 'middle center',
            config: {
                location: "São Paulo, State of São Paulo, Brazil",                // See instructions
                locationCode: "n23d55n46d63",             // See instructions
                languages: "pt",                          // See Languages list
                tempUnits: "C",                           // F or C
                font: "Tahoma",                           // See Font list
                textColor: "#ffffff",                     // Hex color codes.
                htColor: "#ffffff",                       // high temp color. Hex color codes.
                ltColor: "#00dfff",                       // low temp color. Hex color codes.
                sunColor: "#febc2f",                      // Hex color codes.
                moonColor: "#dfdede",                     // Hex color codes.
                cloudColor: "#dfdede",                    // Hex color codes.
                cloudFill: "#1f567c",                     // Hex color codes.
                rainColor: "#93bffe",                     // Hex color codes.
                snowColor: "#dfdede",                     // Hex color codes.
                height: "200px",                          // module is responsive to changes
                width: "1200px",                          // module is responsive to changes
                label: "São Paulo",                       // Location seems logical . .
                label2: "São Paulo",                      // . . . or anything you like
                days: "7",                                // 3, 5 or 7
                theme: "weather_one",                     // See Themes list *** theme overrides bgColor. ***
                bgColor: "#000000",                       // theme overrides bgColor.
                icons: "Climacons Animated",              // Iconvault, Climacons or Climacons Animated
                animationSpeed: 3000,
                updateInterval: 10 * 60 * 1000,
            }
        },
		
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
