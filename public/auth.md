# auth.md

This document specifies agent authentication and registration instructions for `https://mali.tr`.

## Overview
The website `https://mali.tr` provides public, open, read-only content including portfolio projects, blog posts, service details, and LLM-friendly documentation.

## Authentication Requirements
- **Public Content**: No authentication required. All AI agents, crawlers, and LLMs are granted open read access to public endpoints, `llms.txt`, `llms-full.txt`, and catalog specifications.
- **Protected Resources**: Currently, there are no protected end-user APIs requiring OAuth 2.0 or OIDC tokens on this domain.

## Discovery Metadata
- **AI Catalog**: https://mali.tr/.well-known/ai-catalog.json
- **API Catalog**: https://mali.tr/.well-known/api-catalog
- **MCP Server Card**: https://mali.tr/.well-known/mcp/server-card.json
- **Agent Card**: https://mali.tr/.well-known/agent-card.json
- **Agent Skills**: https://mali.tr/.well-known/agent-skills/index.json
- **Contact**: https://mali.tr/bio
