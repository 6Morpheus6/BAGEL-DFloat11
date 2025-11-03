module.exports = {
  run: [
    {
      when: "{{gpu === 'amd' || platform === 'darwin'}}",
      method: "notify",
      params: {
        html: "This app requires an NVIDIA GPU. Not compatible with AMD GPUs and macOS."
      },
      next: null
    },
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/Bagel-DFloat11-fork app",
        ]
      }
    },
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
      method: "shell.run",
      params: {
        path: "app",
        message: "hf download DFloat11/BAGEL-7B-MoT-DF11 --local-dir BAGEL-7B-MoT-DF11 && dir"
      }
    }
  ]
}
