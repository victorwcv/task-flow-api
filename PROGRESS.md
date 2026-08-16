# TaskFlow — Progress

## Current stage

Stage 1 — Initial API

## Completed

- [ ] Project initialization
- [ ] TypeScript configuration
- [ ] Task domain model
- [ ] In-memory storage
- [ ] POST /tasks
- [ ] GET /tasks
- [ ] GET /tasks/:id
- [ ] PATCH /tasks/:id
- [ ] DELETE /tasks/:id

## Current focus

Task domain modeling.

## Architecture

Currently intentionally minimal.

## Decisions

- Node.js + TypeScript
- Fastify
- pnpm
- In-memory storage initially
- No premature abstractions

## Next step

Implement the first task creation flow.

## Prompt

Quiero continuar el desarrollo de mi proyecto TaskFlow API.

Este proyecto es un proyecto evolutivo para aplicar de forma práctica lo aprendido en mi aprendizaje avanzado de TypeScript.

Te adjunto el PROGRESS.md actualizado del repositorio. Debes utilizarlo como fuente principal de contexto sobre el estado actual del proyecto.

Reglas para continuar:

1. No reinicies el proyecto ni vuelvas a explicar fundamentos que ya domino.
2. No asumas que el proyecto está más avanzado de lo indicado en PROGRESS.md.
3. Respeta las decisiones de arquitectura y tecnología registradas.
4. No introduzcas abstracciones, patrones o dependencias prematuramente.
5. Quiero avanzar paso a paso, implementando primero y haciendo revisión/refactor después.
6. Cuando aparezca una oportunidad relevante para aplicar TypeScript avanzado, explícame el problema y déjame intentar una solución antes de mostrarme la implementación.
7. Actúa como un Senior Developer haciendo pair programming/code review conmigo.
8. Cuestiona mis decisiones cuando haya una alternativa mejor y explícame el trade-off.
9. Prioriza código mantenible y prácticas profesionales sobre soluciones artificialmente complejas.
10. Mantén separado el objetivo de este repositorio del TypeScript Playground:

- Playground = estudiar y experimentar conceptos de TypeScript.
- TaskFlow = aplicar esos conceptos dentro de un proyecto real.

11. Si necesitamos aprender algo nuevo para continuar, primero identifica exactamente qué concepto necesitamos y relaciónalo con el problema del proyecto.
12. Al terminar una etapa importante, ayúdame a actualizar PROGRESS.md para que pueda utilizarlo como memoria en futuros chats.

Primero lee el PROGRESS.md y dime:

- dónde estamos exactamente;
- qué hemos construido;
- qué decisiones importantes existen;
- cuál es el siguiente paso;
- y qué deberíamos implementar ahora.

No avances automáticamente más allá del siguiente paso.
