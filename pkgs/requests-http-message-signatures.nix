{ buildPythonPackage, fetchPypi, requests, cryptography  }: buildPythonPackage rec {
  pname = "requests-http-message-signatures";
  version = "0.3.1";
  src = fetchPypi {
    inherit pname version;
    sha256 = "sha256-AjW7XNP0p9ZZZF4qyTfacnkTIUNOd1cPfiEELlEIINo=";
  };
  propagatedBuildInputs = [ requests cryptography ];
  doCheck = false;
}
