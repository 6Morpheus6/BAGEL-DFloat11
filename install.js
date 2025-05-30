module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/Bagel-DFloat11-fork app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv_python: "3.12",
          venv: "env",
          path: "app",
          // xformers: true,
          triton: true,
          // sageattention: true
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r ../requirements.txt"
        ]
      }
    },
    {
      method: "hf.download",
      params: {
        path: "app",
        "_": [ "DFloat11/BAGEL-7B-MoT-DF11" ],
        "local-dir": "BAGEL-7B-MoT-DF11",
      }
    }
  ]
}
