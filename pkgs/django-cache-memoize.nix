{ buildPythonPackage, fetchPypi }: buildPythonPackage rec {
  pname = "django-cache-memoize";
  version = "0.1.10";
  src = fetchPypi {
    inherit pname version;
    sha256 = "sha256-Y+j6okWkHA262EOAfp8hpuWeuo5uUN8xD99khaZ0mEM=";
  };
  propagatedBuildInputs = [];
  doCheck = false;
}
