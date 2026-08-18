# TaskFlow — Progress

> Living project state used to resume development across sessions.
>
> **Rule:** Update this file when a milestone, decision, or current focus changes.
> Do not document every implementation detail here.

---

## Current State

**Stage:** 2 — Runtime Validation  
**Milestone:** Zod + Fastify runtime validation completed  
**Status:** 🟢 Completed  
**Next:** Testing

---

## Roadmap

### Stage 1 — Initial API

- [x] Project initialization
- [x] TypeScript configuration
- [x] Task domain model
- [x] Task creation input
- [x] Task update input
- [x] In-memory `TaskStore`
- [x] Create task
- [x] Get task by ID
- [x] Get all tasks
- [x] Update task
- [x] Delete task
- [x] Fastify server
- [x] `POST /tasks`
- [x] `GET /tasks`
- [x] `GET /tasks/:id`
- [x] `PATCH /tasks/:id`
- [x] `DELETE /tasks/:id`

### Stage 2 — Runtime Validation

- [x] Zod validation schemas
- [x] Derive TypeScript types with `z.infer`
- [x] Use `taskSchema` as the single source of truth
- [x] Derive input schemas with `pick` / `partial`
- [x] Request validation
- [x] Response validation
- [x] Fastify `ZodTypeProvider` integration
- [x] Zod validator compiler
- [x] Zod serializer compiler
- [x] Validation error handling
- [x] Runtime response validation verified
- [x] Invalid request scenarios verified with Bruno

### Stage 3 — Testing

- [ ] Unit tests
- [ ] Store tests
- [ ] API tests
- [ ] Edge cases

### Stage 4 — Persistence

- [ ] PostgreSQL
- [ ] Prisma
- [ ] Repository layer
- [ ] Replace in-memory storage

### Stage 5 — Architecture Evolution

- [ ] Service layer
- [ ] Dependency injection
- [ ] Domain boundaries
- [ ] Architectural review

## Current Technical State

### Validation

The API currently validates:

- Route parameters
- Request bodies
- Successful responses
- Expected error responses

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

```

```
