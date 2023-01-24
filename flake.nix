{
  description = "Funkwhale";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.11";
    utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , nixpkgs
    , utils
    }:
    utils.lib.eachSystem [ "x86_64-linux" "aarch64-linux" ]
      (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      rec {
        packages = utils.lib.flattenTree rec {
          funkwhale = (pkgs.callPackages ./pkgs/funkwhale.nix { }).funkwhale;
          funkwhale-front = (pkgs.callPackages ./pkgs/funkwhale.nix { }).funkwhale-front;
          requests-http-message-signatures = pkgs.python3Packages.callPackage ./pkgs/requests-http-message-signatures.nix { };
          django-cache-memoize = pkgs.python3Packages.callPackage ./pkgs/django-cache-memoize.nix { };
          default = funkwhale;
        };
        checks = packages;
      }) //

    {
      overlays.default = final: prev: {
        inherit (self.packages.${prev.system})
          funkwhale
          funkwhale-front;
      };

      # funkwhale service module
      nixosModules.default = (import ./nixos-modules/module.nix);
    };
}
