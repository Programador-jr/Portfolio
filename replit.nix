{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
    pkgs.sudo
    pkgs.mkcert
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}