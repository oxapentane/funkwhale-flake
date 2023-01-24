{ lib
, stdenv
, fetchurl
, unzip
, ...
}:
let
  basename = "funkwhale";
  version = "1.2.9";
in
{
  "${basename}-front" = stdenv.mkDerivation {
    pname = "funkwhale-front";
    inherit version;

    nativeBuildInputs = [ unzip ];
    unpackCmd = "unzip $curSrc";

    src = fetchurl {
      url =
        "https://dev.funkwhale.audio/funkwhale/funkwhale/-/jobs/artifacts/${version}/download?job=build_front";
      sha256 = "sha256-L67isxtdcX5OXzTz1Kbeg0GmWdk6lnv+zKsC04WApv0=";
    };

    installPhase = ''
      mkdir $out
      cp -R ./dist/* $out
    '';
  };

  "${basename}" = stdenv.mkDerivation {
    pname = "funkwhale";
    inherit version;
    src = fetchurl {
      url = "https://dev.funkwhale.audio/funkwhale/funkwhale/-/archive/${version}/funkwhale-${version}.tar.bz2";
      sha256 = "sha256-rhXK0t3CEO0rqdjOlDs/DqUR333ru3eH1aBsUkIy9z8=";
    };

    installPhase = ''
      sed "s|env -S|env|g" -i front/scripts/*.sh
      mkdir $out
      cp -R ./* $out
    '';

    meta = with lib; {
      description = "A modern, convivial and free music server";
      homepage = "https://funkwhale.audio/";
      license = licenses.agpl3;
      platforms = platforms.linux;
      maintainers = with maintainers; [ mmai ];
    };
  };
}
