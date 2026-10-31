# Awesome Self-Hosted AI

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Weekly refresh](https://github.com/glincker/awesome-selfhosted-ai/actions/workflows/weekly.yml/badge.svg)](https://github.com/glincker/awesome-selfhosted-ai/actions/workflows/weekly.yml)

Open-source AI you can run on your own hardware: local LLMs, chat UIs, agents, MCP servers, RAG, speech and image generation.

Every entry is checked by a weekly job against the GitHub API. Projects with no push for more than 365 days, or that get archived or deleted, move to the Unmaintained list automatically, so this list does not rot.

**75 maintained projects.** Status: `active` pushed within 90 days, `slow` pushed within 365 days.

Missing something new? [Submit a project](https://github.com/glincker/awesome-selfhosted-ai/issues/new?template=submit.yml). Rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Agents and Automation](#agents-and-automation)
- [Chat Interfaces](#chat-interfaces)
- [Coding Assistants](#coding-assistants)
- [Image and Video Generation](#image-and-video-generation)
- [LLM Runtimes and Inference](#llm-runtimes-and-inference)
- [MCP Servers and Gateways](#mcp-servers-and-gateways)
- [Model Gateways and Routers](#model-gateways-and-routers)
- [Observability and Evals](#observability-and-evals)
- [RAG and Vector Databases](#rag-and-vector-databases)
- [Speech and Audio](#speech-and-audio)
- [Unmaintained](#unmaintained)

## Agents and Automation

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [browser-use](https://github.com/browser-use/browser-use) | 120k | 2026-10-31 | MIT | active | Library that lets LLM agents drive a real browser to complete web tasks. |
| [CrewAI](https://github.com/crewAIInc/crewAI) | 60k | 2026-10-30 | MIT | active | Framework for orchestrating role-based teams of AI agents inside your own Python environment. |
| [DeerFlow](https://github.com/bytedance/deer-flow) | 85k | 2026-10-31 | MIT | active | Agent harness that coordinates subagents, sandboxed execution, and memory for long-running tasks. |
| [LangGraph](https://github.com/langchain-ai/langgraph) | 44k | 2026-10-31 | MIT | active | Library for building stateful, long-running agent workflows as graphs with checkpointing. |
| [Letta](https://github.com/letta-ai/letta) | 25k | 2026-10-18 | Apache-2.0 | active | Server for stateful agents that keep long-term memory and run as persistent services. |
| [mem0](https://github.com/mem0ai/mem0) | 68k | 2026-10-30 | Apache-2.0 | active | Memory layer for AI assistants that stores and retrieves user facts across sessions. |
| [OpenManus](https://github.com/FoundationAgents/OpenManus) | 59k | 2026-09-30 | MIT | active | General-purpose agent framework that runs tools and a browser on your own machine. |
| [Pydantic AI](https://github.com/pydantic/pydantic-ai) | 21k | 2026-10-31 | MIT | active | Type-safe Python agent framework with model-agnostic tool calling and structured outputs. |

## Chat Interfaces

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | 68k | 2026-10-30 | MIT | active | Self-hosted app for chatting with documents using local or cloud models and built-in RAG. |
| [big-AGI](https://github.com/enricoros/big-AGI) | 7.2k | 2026-10-30 | MIT | active | Multi-model chat app with personas and tools that can be self-hosted for power users. |
| [Chatbox](https://github.com/chatboxai/chatbox) | 42k | 2026-10-29 | GPL-3.0 | active | Cross-platform desktop and web client for chatting with local and remote LLM APIs. |
| [LibreChat](https://github.com/danny-avila/LibreChat) | 47k | 2026-10-31 | MIT | active | Multi-provider chat UI with plugins, file uploads, and agents that runs in Docker on your server. |
| [NextChat](https://github.com/ChatGPTNextWeb/NextChat) | 89k | 2026-10-20 | MIT | active | Lightweight web chat client for many LLM providers, deployable as a single container. |
| [text-generation-webui](https://github.com/oobabooga/text-generation-webui) | 48k | 2026-08-17 | AGPL-3.0 | active | Gradio web UI for running local models through llama.cpp, Transformers, and ExLlama backends. |

## Coding Assistants

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [Cline](https://github.com/cline/cline) | 71k | 2026-10-31 | Apache-2.0 | active | VS Code agent that plans and edits code using model API keys you supply. |
| [Codex CLI](https://github.com/openai/codex) | 132k | 2026-10-31 | Apache-2.0 | active | Local terminal coding agent that reads, edits, and runs code inside your repository. |
| [Continue](https://github.com/continuedev/continue) | 36k | 2026-10-30 | Apache-2.0 | active | IDE extension for autocomplete, chat, and agentic edits against local or hosted models. |
| [goose](https://github.com/block/goose) | 56k | 2026-10-31 | Apache-2.0 | active | On-machine coding agent that runs shell, file, and extension tools with any supported model. |
| [opencode](https://github.com/sst/opencode) | 223k | 2026-10-31 | MIT | active | Terminal coding agent that works with whichever model provider you configure. |
| [OpenHands](https://github.com/All-Hands-AI/OpenHands) | 92k | 2026-10-30 | MIT | active | Platform for AI software agents that edit code, run commands, and browse inside a sandbox. |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 29k | 2026-10-31 | Apache-2.0 | active | Terminal coding agent tuned for Qwen models and compatible with other OpenAI-style APIs. |

## Image and Video Generation

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [AI Toolkit](https://github.com/ostris/ai-toolkit) | 13k | 2026-10-30 | MIT | active | Scripts and UI for training LoRAs and fine-tunes on diffusion and video models. |
| [ComfyUI](https://github.com/comfyanonymous/ComfyUI) | 144k | 2026-10-31 | GPL-3.0 | active | Node-based interface and engine for running diffusion image and video pipelines locally. |
| [DiffSynth-Studio](https://github.com/modelscope/DiffSynth-Studio) | 13k | 2026-10-30 | Apache-2.0 | active | Diffusion engine for image and video generation with memory-optimized local inference. |
| [Diffusers](https://github.com/huggingface/diffusers) | 35k | 2026-10-31 | Apache-2.0 | active | Library of diffusion pipelines and schedulers for image, video, and audio generation in PyTorch. |
| [InvokeAI](https://github.com/invoke-ai/InvokeAI) | 29k | 2026-10-31 | Apache-2.0 | active | Creative image generation studio with a browser UI, canvas editing, and model management. |
| [Mochi](https://github.com/genmoai/mochi) | 3.8k | 2026-10-22 | Apache-2.0 | active | Open text-to-video model released with inference code for running on local GPUs. |
| [sd-scripts](https://github.com/kohya-ss/sd-scripts) | 7.3k | 2026-10-30 | Apache-2.0 | active | Training and fine-tuning scripts for Stable Diffusion and related image models. |

## LLM Runtimes and Inference

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [exo](https://github.com/exo-explore/exo) | 48k | 2026-10-31 | Apache-2.0 | active | Peer-to-peer system that pools devices on a local network to run one larger model. |
| [llama-swap](https://github.com/mostlygeek/llama-swap) | 6.1k | 2026-10-31 | MIT | active | Lightweight proxy that swaps between llama.cpp, vLLM, and other model servers per request. |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | 133k | 2026-10-31 | MIT | active | C and C++ inference engine for running GGUF models on CPUs and GPUs across many backends. |
| [LocalAI](https://github.com/mudler/LocalAI) | 50k | 2026-10-30 | MIT | active | OpenAI-compatible server that runs text, image, and audio models on local hardware. |
| [MLC LLM](https://github.com/mlc-ai/mlc-llm) | 23k | 2026-10-30 | Apache-2.0 | active | Compiler-based LLM deployment that runs models natively on phones, browsers, and desktop GPUs. |
| [Ollama](https://github.com/ollama/ollama) | 185k | 2026-10-30 | MIT | active | Local model runner with a CLI and HTTP API for pulling and serving open-weight LLMs. |
| [SGLang](https://github.com/sgl-project/sglang) | 38k | 2026-10-31 | Apache-2.0 | active | Serving framework for LLMs and multimodal models with structured generation and prefix caching. |
| [vLLM](https://github.com/vllm-project/vllm) | 96k | 2026-10-31 | Apache-2.0 | active | High-throughput LLM serving engine with paged attention and an OpenAI-compatible server. |
| [Xinference](https://github.com/xorbitsai/inference) | 9.6k | 2026-10-31 | Apache-2.0 | active | Model serving platform that exposes LLM, embedding, and speech models through one API. |

## MCP Servers and Gateways

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 55k | 2026-10-30 | Apache-2.0 | active | MCP server that lets coding agents control and inspect a local Chrome instance via DevTools. |
| [Docker MCP Gateway](https://github.com/docker/mcp-gateway) | 1.6k | 2026-10-26 | MIT | active | Runs MCP servers in isolated containers and exposes them to clients through one gateway. |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | 34k | 2026-10-30 | MIT | active | Official MCP server exposing GitHub repositories, issues, and pull requests to AI clients. |
| [mcp-context-forge](https://github.com/IBM/mcp-context-forge) | 4.7k | 2026-10-30 | Apache-2.0 | active | Gateway and registry that federates MCP and REST services with auth, rate limits, and an admin UI. |
| [mcp-proxy (sparfenyuk)](https://github.com/sparfenyuk/mcp-proxy) | 2.8k | 2026-10-29 | MIT | active | Bridges stdio MCP servers to SSE or streamable HTTP transports and back. |
| [mcp-proxy (TBXark)](https://github.com/TBXark/mcp-proxy) | 743 | 2026-09-15 | MIT | active | Aggregates several MCP servers behind one endpoint with config-driven routing. |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | 39k | 2026-10-31 | Apache-2.0 | active | MCP server giving LLM clients browser control through Playwright accessibility snapshots. |
| [Unla](https://github.com/AmoyLab/Unla) | 2.2k | 2026-10-20 | MIT | active | Gateway that turns existing HTTP APIs and MCP servers into MCP endpoints with a web console. |

## Model Gateways and Routers

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [Arch Gateway](https://github.com/katanemo/archgw) | 7.1k | 2026-10-24 | Apache-2.0 | active | Edge proxy built on Envoy that routes and guards LLM traffic across model providers. |
| [Claude Code Router](https://github.com/musistudio/claude-code-router) | 38k | 2026-10-10 | MIT | active | Local router that sends coding-agent requests to different model providers based on rules. |
| [Envoy AI Gateway](https://github.com/envoyproxy/ai-gateway) | 2.3k | 2026-10-29 | Apache-2.0 | active | Envoy-based gateway that routes and secures traffic to multiple LLM providers. |
| [New API](https://github.com/QuantumNous/new-api) | 51k | 2026-10-31 | AGPL-3.0 | active | AI model gateway that fronts many upstream providers behind one key with quotas and billing. |

## Observability and Evals

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [DeepEval](https://github.com/confident-ai/deepeval) | 19k | 2026-10-29 | Apache-2.0 | active | Pytest-style evaluation framework for LLM apps with metrics for RAG and agent outputs. |
| [Helicone](https://github.com/helicone/helicone) | 6.2k | 2026-10-28 | Apache-2.0 | active | LLM observability gateway that logs requests, costs, and latency through a proxy you host. |
| [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) | 3.1k | 2026-10-30 | MIT | active | Framework for evaluating LLMs and agents with solvers, scorers, and sandboxed tool execution. |
| [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) | 14k | 2026-09-14 | MIT | active | Framework for running standard benchmark suites against language models locally. |
| [MLflow](https://github.com/mlflow/mlflow) | 29k | 2026-10-31 | Apache-2.0 | active | ML lifecycle platform with tracing, prompt versioning, and evaluation for LLM applications. |
| [OpenLLMetry](https://github.com/traceloop/openllmetry) | 7.5k | 2026-10-19 | Apache-2.0 | active | OpenTelemetry instrumentation for LLM and vector database calls, exporting to any backend. |
| [Opik](https://github.com/comet-ml/opik) | 23k | 2026-10-31 | Apache-2.0 | active | Open-source LLM tracing and evaluation platform with a self-hostable Docker deployment. |
| [Promptfoo](https://github.com/promptfoo/promptfoo) | 27k | 2026-10-31 | MIT | active | CLI and library for evaluating prompts, models, and RAG outputs with test assertions. |

## RAG and Vector Databases

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [Chroma](https://github.com/chroma-core/chroma) | 30k | 2026-10-30 | Apache-2.0 | active | Embedding database for LLM apps with a single-node server and Python and JS clients. |
| [Cognee](https://github.com/topoteretes/cognee) | 33k | 2026-10-30 | Apache-2.0 | active | Knowledge engine that builds graph and vector memory from documents for agents. |
| [Haystack](https://github.com/deepset-ai/haystack) | 27k | 2026-10-31 | Apache-2.0 | active | Python framework for building search and RAG pipelines from swappable components. |
| [LanceDB](https://github.com/lancedb/lancedb) | 12k | 2026-10-31 | Apache-2.0 | active | Embedded multimodal vector database that stores tables on local disk or object storage. |
| [LightRAG](https://github.com/HKUDS/LightRAG) | 40k | 2026-10-29 | MIT | active | Graph-based retrieval system that indexes entities and relations for faster RAG queries. |
| [LlamaIndex](https://github.com/run-llama/llama_index) | 53k | 2026-10-26 | MIT | active | Data framework that connects private documents to LLMs through indexes and retrievers. |
| [Milvus](https://github.com/milvus-io/milvus) | 47k | 2026-10-31 | Apache-2.0 | active | Distributed vector database built for large-scale embedding search with hybrid filtering. |
| [PrivateGPT](https://github.com/zylon-ai/private-gpt) | 58k | 2026-10-29 | Apache-2.0 | active | Offline document chat API with ingestion, embeddings, and an OpenAI-style interface. |
| [Qdrant](https://github.com/qdrant/qdrant) | 35k | 2026-10-30 | Apache-2.0 | active | Vector similarity search engine in Rust with payload filtering and REST and gRPC APIs. |
| [RAGFlow](https://github.com/infiniflow/ragflow) | 93k | 2026-10-31 | Apache-2.0 | active | Document-understanding RAG engine with chunking templates, citations, and agent workflows. |

## Speech and Audio

| Project | Stars | Last push | License | Status | What it is |
| --- | ---: | --- | --- | --- | --- |
| [faster-whisper](https://github.com/SYSTRAN/faster-whisper) | 26k | 2026-10-30 | MIT | active | Whisper reimplementation on CTranslate2 that transcribes faster with lower memory use. |
| [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI) | 5.6k | 2026-10-31 | Apache-2.0 | active | OpenAI-compatible FastAPI server wrapping the Kokoro text-to-speech model. |
| [Piper](https://github.com/OHF-Voice/piper1-gpl) | 6.1k | 2026-10-30 | GPL-3.0 | active | Fast local neural text-to-speech engine that runs well on small single-board computers. |
| [Silero VAD](https://github.com/snakers4/silero-vad) | 11k | 2026-10-22 | MIT | active | Voice activity detector model that runs on CPU from a small ONNX file. |
| [Speaches](https://github.com/speaches-ai/speaches) | 3.7k | 2026-10-29 | MIT | active | OpenAI-compatible server for transcription and speech synthesis on your own hardware. |
| [Whisper](https://github.com/openai/whisper) | 112k | 2026-08-31 | MIT | active | Reference speech recognition model and inference code for multilingual transcription. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | 55k | 2026-10-30 | MIT | active | C and C++ port of Whisper for fast transcription on CPUs, Apple Silicon, and GPUs. |
| [WhisperX](https://github.com/m-bain/whisperX) | 25k | 2026-10-22 | BSD-2-Clause | active | Whisper pipeline that adds word-level timestamps and speaker diarization. |

## Unmaintained

Kept here for reference. If a project is active again it returns to its category on the next refresh.

_Nothing here yet._

## License

[CC0 1.0](LICENSE). Data refreshed 2026-10-31.
