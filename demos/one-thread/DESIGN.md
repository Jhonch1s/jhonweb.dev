---
name: One Thread — Portfolio Demo
description: Consola de clasificación multicanal para una demo de portfolio
colors:
  ink: "#19313a"
  nav: "#142d37"
  nav-active: "#d8f0eb"
  primary: "#176779"
  paper: "#f4f5f1"
  surface: "#ffffff"
  line: "#dde5df"
  quiet: "#617575"
  urgent: "#a92d3f"
  pending: "#e9b458"
typography:
  display:
    fontFamily: "Aptos, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(26px, 3vw, 42px)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Aptos, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  control: "8px"
  surface: "15px"
spacing:
  small: "8px"
  medium: "18px"
  large: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
---

# Design System: One Thread — Portfolio Demo

## Overview

**Dirección: mesa de despacho.** La navegación oscura concentra las áreas de trabajo; una superficie clara deja que nombres, resúmenes y estados sean el centro. Los números se reúnen en una sola banda y los mensajes ocupan la mayor parte del dashboard.

## Colors

El azul petróleo organiza navegación y acciones. El verde azulado marca la selección; rojo y ámbar se reservan para prioridad y estado. El fondo tibio separa superficies sin añadir sombras a cada bloque.

## Typography

Titulares compactos y directos, cifras grandes con numerales tabulares, texto de conversación a tamaño de lectura. La jerarquía debe seguir siendo clara sin depender del color.

## Layout

En escritorio: banda de métricas, mensajes a ancho completo y análisis debajo. En móvil: métrica principal sobre dos secundarias, mensajes como fichas y gráficos al final. La navegación pasa a un panel lateral.

## Elevation & Depth

Las superficies se separan con un borde de 1 px; solo la banda de métricas y el panel lateral llevan sombra suave.

## Shapes

Controles de 8 px y superficies de 13–16 px. Las etiquetas de canal y estado usan cápsulas pequeñas.

## Components

La banda de métricas es una sola superficie con divisores. Las filas de mensajes muestran remitente, canal, resumen, clasificación y acciones. Las opciones fuera del alcance permanecen visibles y deshabilitadas.

## Do's and Don'ts

- Mantener el aviso de datos ficticios visible en cada sección.
- Mantener estados legibles con texto además del color.
- No añadir controles que aparenten enviar mensajes o conectar servicios.
