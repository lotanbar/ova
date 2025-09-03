Since Expo Router sucks, we have to create a lower case named comp for each page in the app,
which will navigate in turn to an upper case named comp in the app dir.

That's not all!
Since I don't want to delve into the Expo Router binaries, I'm gonna have to use index has the
default route, and render Home.tsx from app/index.tsx simply to properly name files!
