# Awesome Self-Hosted AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Open-source AI you can run on your own hardware or server.

107 projects across local LLMs, chat interfaces, agents, MCP servers, RAG, speech and image generation. A weekly job checks every project against the GitHub API, and anything archived, deleted or silent for over a year moves to [UNMAINTAINED.md](UNMAINTAINED.md).

**107** projects | **107** active in the last 90 days | **4.9M** combined stars | **0** unmaintained | refreshed 2026-10-31

See the [live health table](LIVE.md) for stars, last push and license per project.

## Contents

- [Agents and Automation](#agents-and-automation) (15)
- [Chat Interfaces](#chat-interfaces) (8)
- [Coding Assistants](#coding-assistants) (8)
- [Image and Video Generation](#image-and-video-generation) (7)
- [LLM Runtimes and Inference](#llm-runtimes-and-inference) (12)
- [MCP Servers and Gateways](#mcp-servers-and-gateways) (8)
- [Model Gateways and Routers](#model-gateways-and-routers) (4)
- [Observability and Evals](#observability-and-evals) (10)
- [RAG and Vector Databases](#rag-and-vector-databases) (13)
- [Speech and Audio](#speech-and-audio) (8)
- [Source-Available](#source-available) (14)

## Agents and Automation

- [Agno](https://github.com/agno-agi/agno) - Python framework for building multi-agent systems with memory, knowledge, and a runtime for agent apps.
- [Botpress](https://github.com/botpress/botpress) - Platform for building and self-hosting conversational AI chatbots and agents with a visual flow builder.
- [browser-use](https://github.com/browser-use/browser-use) - Library that lets LLM agents drive a real browser to complete web tasks.
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-based teams of AI agents inside your own Python environment.
- [DeerFlow](https://github.com/bytedance/deer-flow) - Agent harness that coordinates subagents, sandboxed execution, and memory for long-running tasks.
- [Langflow](https://github.com/langflow-ai/langflow) - Visual builder for AI agents and RAG workflows in Python, with each flow exposed as an API.
- [LangGraph](https://github.com/langchain-ai/langgraph) - Library for building stateful, long-running agent workflows as graphs with checkpointing.
- [Letta](https://github.com/letta-ai/letta) - Server for stateful agents that keep long-term memory and run as persistent services.
- [mem0](https://github.com/mem0ai/mem0) - Memory layer for AI assistants that stores and retrieves user facts across sessions.
- [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) - Natural-language interface that lets an LLM run code and shell commands on your own computer.
- [OpenManus](https://github.com/FoundationAgents/OpenManus) - General-purpose agent framework that runs tools and a browser on your own machine.
- [Pydantic AI](https://github.com/pydantic/pydantic-ai) - Type-safe Python agent framework with model-agnostic tool calling and structured outputs.
- [Sim](https://github.com/simstudioai/sim) - Visual workflow builder for agents and LLM pipelines that can be self-hosted with Docker.
- [Trigger.dev](https://github.com/triggerdotdev/trigger.dev) - TypeScript background job framework for long-running AI tasks with retries and run monitoring.
- [Zep](https://github.com/getzep/zep) - Memory service that stores and retrieves facts and conversation history for AI agents over time.

## Chat Interfaces

- [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) - Self-hosted app for chatting with documents using local or cloud models and built-in RAG.
- [big-AGI](https://github.com/enricoros/big-AGI) - Multi-model chat app with personas and tools that can be self-hosted for power users.
- [Chatbox](https://github.com/chatboxai/chatbox) - Cross-platform desktop and web client for chatting with local and remote LLM APIs.
- [Cherry Studio](https://github.com/CherryHQ/cherry-studio) - Desktop client for chatting with many LLM providers, with knowledge bases and local document search.
- [LibreChat](https://github.com/danny-avila/LibreChat) - Multi-provider chat UI with plugins, file uploads, and agents that runs in Docker on your server.
- [NextChat](https://github.com/ChatGPTNextWeb/NextChat) - Lightweight web chat client for many LLM providers, deployable as a single container.
- [Perplexica](https://github.com/ItzCrazyKns/Perplexica) - AI answering search engine that cites web sources and runs with local or cloud models.
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui) - Gradio web UI for running local models through llama.cpp, Transformers, and ExLlama backends.

## Coding Assistants

- [Cline](https://github.com/cline/cline) - VS Code agent that plans and edits code using model API keys you supply.
- [Codex CLI](https://github.com/openai/codex) - Local terminal coding agent that reads, edits, and runs code inside your repository.
- [Continue](https://github.com/continuedev/continue) - IDE extension for autocomplete, chat, and agentic edits against local or hosted models.
- [goose](https://github.com/block/goose) - On-machine coding agent that runs shell, file, and extension tools with any supported model.
- [opencode](https://github.com/sst/opencode) - Terminal coding agent that works with whichever model provider you configure.
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Platform for AI software agents that edit code, run commands, and browse inside a sandbox.
- [Qwen Code](https://github.com/QwenLM/qwen-code) - Terminal coding agent tuned for Qwen models and compatible with other OpenAI-style APIs.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Software engineering agent that resolves GitHub issues by editing code and running commands in a container.

## Image and Video Generation

- [AI Toolkit](https://github.com/ostris/ai-toolkit) - Scripts and UI for training LoRAs and fine-tunes on diffusion and video models.
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - Node-based interface and engine for running diffusion image and video pipelines locally.
- [DiffSynth-Studio](https://github.com/modelscope/DiffSynth-Studio) - Diffusion engine for image and video generation with memory-optimized local inference.
- [Diffusers](https://github.com/huggingface/diffusers) - Library of diffusion pipelines and schedulers for image, video, and audio generation in PyTorch.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - Creative image generation studio with a browser UI, canvas editing, and model management.
- [Mochi](https://github.com/genmoai/mochi) - Open text-to-video model released with inference code for running on local GPUs.
- [sd-scripts](https://github.com/kohya-ss/sd-scripts) - Training and fine-tuning scripts for Stable Diffusion and related image models.

## LLM Runtimes and Inference

- [exo](https://github.com/exo-explore/exo) - Peer-to-peer system that pools devices on a local network to run one larger model.
- [Llama Stack](https://github.com/meta-llama/llama-stack) - Server with unified APIs for inference, RAG, agents, and safety that runs Llama and other models.
- [llama-swap](https://github.com/mostlygeek/llama-swap) - Lightweight proxy that swaps between llama.cpp, vLLM, and other model servers per request.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - C and C++ inference engine for running GGUF models on CPUs and GPUs across many backends.
- [LocalAI](https://github.com/mudler/LocalAI) - OpenAI-compatible server that runs text, image, and audio models on local hardware.
- [MLC LLM](https://github.com/mlc-ai/mlc-llm) - Compiler-based LLM deployment that runs models natively on phones, browsers, and desktop GPUs.
- [Ollama](https://github.com/ollama/ollama) - Local model runner with a CLI and HTTP API for pulling and serving open-weight LLMs.
- [SGLang](https://github.com/sgl-project/sglang) - Serving framework for LLMs and multimodal models with structured generation and prefix caching.
- [Triton Inference Server](https://github.com/triton-inference-server/server) - Model server that runs models from many frameworks on GPUs and CPUs with dynamic batching.
- [Unsloth](https://github.com/unslothai/unsloth) - Training toolkit that speeds up LoRA and full fine-tuning of open LLMs on your own GPUs.
- [vLLM](https://github.com/vllm-project/vllm) - High-throughput LLM serving engine with paged attention and an OpenAI-compatible server.
- [Xinference](https://github.com/xorbitsai/inference) - Model serving platform that exposes LLM, embedding, and speech models through one API.

## MCP Servers and Gateways

- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) - MCP server that lets coding agents control and inspect a local Chrome instance via DevTools.
- [Docker MCP Gateway](https://github.com/docker/mcp-gateway) - Runs MCP servers in isolated containers and exposes them to clients through one gateway.
- [GitHub MCP Server](https://github.com/github/github-mcp-server) - Official MCP server exposing GitHub repositories, issues, and pull requests to AI clients.
- [mcp-context-forge](https://github.com/IBM/mcp-context-forge) - Gateway and registry that federates MCP and REST services with auth, rate limits, and an admin UI.
- [mcp-proxy (sparfenyuk)](https://github.com/sparfenyuk/mcp-proxy) - Bridges stdio MCP servers to SSE or streamable HTTP transports and back.
- [mcp-proxy (TBXark)](https://github.com/TBXark/mcp-proxy) - Aggregates several MCP servers behind one endpoint with config-driven routing.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - MCP server giving LLM clients browser control through Playwright accessibility snapshots.
- [Unla](https://github.com/AmoyLab/Unla) - Gateway that turns existing HTTP APIs and MCP servers into MCP endpoints with a web console.

## Model Gateways and Routers

- [Arch Gateway](https://github.com/katanemo/archgw) - Edge proxy built on Envoy that routes and guards LLM traffic across model providers.
- [Claude Code Router](https://github.com/musistudio/claude-code-router) - Local router that sends coding-agent requests to different model providers based on rules.
- [Envoy AI Gateway](https://github.com/envoyproxy/ai-gateway) - Envoy-based gateway that routes and secures traffic to multiple LLM providers.
- [New API](https://github.com/QuantumNous/new-api) - AI model gateway that fronts many upstream providers behind one key with quotas and billing.

## Observability and Evals

- [Argilla](https://github.com/argilla-io/argilla) - Data annotation and feedback platform for curating datasets and reviewing LLM outputs by hand.
- [DeepEval](https://github.com/confident-ai/deepeval) - Pytest-style evaluation framework for LLM apps with metrics for RAG and agent outputs.
- [Helicone](https://github.com/helicone/helicone) - LLM observability gateway that logs requests, costs, and latency through a proxy you host.
- [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) - Framework for evaluating LLMs and agents with solvers, scorers, and sandboxed tool execution.
- [LangWatch](https://github.com/langwatch/langwatch) - LLM monitoring and evaluation platform with tracing, datasets, and prompt management for AI apps.
- [LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) - Framework for running standard benchmark suites against language models locally.
- [MLflow](https://github.com/mlflow/mlflow) - ML lifecycle platform with tracing, prompt versioning, and evaluation for LLM applications.
- [OpenLLMetry](https://github.com/traceloop/openllmetry) - OpenTelemetry instrumentation for LLM and vector database calls, exporting to any backend.
- [Opik](https://github.com/comet-ml/opik) - Open-source LLM tracing and evaluation platform with a self-hostable Docker deployment.
- [Promptfoo](https://github.com/promptfoo/promptfoo) - CLI and library for evaluating prompts, models, and RAG outputs with test assertions.

## RAG and Vector Databases

- [Chroma](https://github.com/chroma-core/chroma) - Embedding database for LLM apps with a single-node server and Python and JS clients.
- [Cognee](https://github.com/topoteretes/cognee) - Knowledge engine that builds graph and vector memory from documents for agents.
- [Graphiti](https://github.com/getzep/graphiti) - Framework for building temporal knowledge graphs from agent and user data for retrieval.
- [Haystack](https://github.com/deepset-ai/haystack) - Python framework for building search and RAG pipelines from swappable components.
- [LanceDB](https://github.com/lancedb/lancedb) - Embedded multimodal vector database that stores tables on local disk or object storage.
- [LightRAG](https://github.com/HKUDS/LightRAG) - Graph-based retrieval system that indexes entities and relations for faster RAG queries.
- [LlamaIndex](https://github.com/run-llama/llama_index) - Data framework that connects private documents to LLMs through indexes and retrievers.
- [MaxKB](https://github.com/1Panel-dev/MaxKB) - Knowledge base and agent platform for RAG chatbots and workflow automation over your own documents.
- [Milvus](https://github.com/milvus-io/milvus) - Distributed vector database built for large-scale embedding search with hybrid filtering.
- [MindsDB](https://github.com/mindsdb/mindsdb) - Federated SQL layer that connects databases and apps to AI models for querying and in-database ML.
- [PrivateGPT](https://github.com/zylon-ai/private-gpt) - Offline document chat API with ingestion, embeddings, and an OpenAI-style interface.
- [Qdrant](https://github.com/qdrant/qdrant) - Vector similarity search engine in Rust with payload filtering and REST and gRPC APIs.
- [RAGFlow](https://github.com/infiniflow/ragflow) - Document-understanding RAG engine with chunking templates, citations, and agent workflows.

## Speech and Audio

- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) - Whisper reimplementation on CTranslate2 that transcribes faster with lower memory use.
- [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI) - OpenAI-compatible FastAPI server wrapping the Kokoro text-to-speech model.
- [Piper](https://github.com/OHF-Voice/piper1-gpl) - Fast local neural text-to-speech engine that runs well on small single-board computers.
- [Silero VAD](https://github.com/snakers4/silero-vad) - Voice activity detector model that runs on CPU from a small ONNX file.
- [Speaches](https://github.com/speaches-ai/speaches) - OpenAI-compatible server for transcription and speech synthesis on your own hardware.
- [Whisper](https://github.com/openai/whisper) - Reference speech recognition model and inference code for multilingual transcription.
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - C and C++ port of Whisper for fast transcription on CPUs, Apple Silicon, and GPUs.
- [WhisperX](https://github.com/m-bain/whisperX) - Whisper pipeline that adds word-level timestamps and speaker diarization.

## Source-Available

Widely used and self-hostable, but the license adds terms beyond a standard open-source license. Check them before commercial use.

- [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) - Platform for building, running and monitoring autonomous AI agents with a visual workflow builder. (Polyform Shield for platform, MIT elsewhere)
- [Browserless](https://github.com/browserless/browserless) - Headless Chrome service that agents and scripts drive over an API for browser automation at scale. (MongoDB SSPL or commercial license)
- [Crush](https://github.com/charmbracelet/crush) - Terminal-based AI coding agent that works with multiple LLM providers and project context. (FSL-1.1-MIT (converts to MIT after two years))
- [Dify](https://github.com/langgenius/dify) - Platform for building agentic workflows and LLM apps with a visual editor, RAG pipeline and model management. (Modified Apache-2.0 with extra terms)
- [FastGPT](https://github.com/labring/FastGPT) - Knowledge base and workflow platform for building RAG chatbots over your own documents. (Apache-2.0 with additional conditions)
- [Fish Speech](https://github.com/fishaudio/fish-speech) - Text-to-speech and voice cloning model and server for multilingual speech synthesis. (Fish Audio Community License 1.0)
- [HunyuanVideo](https://github.com/Tencent-Hunyuan/HunyuanVideo) - Large open video generation model from Tencent for text-to-video creation on your own GPUs. (Tencent Hunyuan Community License, excludes EU/UK/KR)
- [IndexTTS](https://github.com/index-tts/index-tts) - Zero-shot text-to-speech model that clones a voice from a short reference audio clip. (bilibili Model Use License Agreement)
- [LobeChat](https://github.com/lobehub/lobe-chat) - Modern chat UI for many LLM providers with plugins, knowledge bases and multimodal input. (LobeHub Community License)
- [LTX-2](https://github.com/Lightricks/LTX-2) - Open video generation model and pipeline for text-to-video and image-to-video on your own GPUs. (LTX Community License Agreement)
- [n8n](https://github.com/n8n-io/n8n) - Workflow automation platform with code and no-code nodes, including AI agent and LLM building blocks. (Sustainable Use License)
- [Open WebUI](https://github.com/open-webui/open-webui) - Self-hosted web interface for chatting with local and cloud LLMs, with RAG, tools and user management. (Open WebUI License)
- [Phoenix](https://github.com/Arize-ai/phoenix) - Tracing, evaluation and prompt experimentation tool for LLM apps, built on OpenTelemetry. (Elastic License 2.0 (ELv2))
- [Wan2GP](https://github.com/deepbeepmeep/Wan2GP) - Low-VRAM app for running Wan and other open video generation models on consumer GPUs. (WanGP Community License 2.0)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). New projects go in `data/projects.json`; this file is generated.
