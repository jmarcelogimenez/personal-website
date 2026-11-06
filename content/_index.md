---
# Leave the title empty to use the site identity.
title: ''
summary: 'Computational mechanics, fluid dynamics and multiscale modelling. Juan Marcelo Gimenez, Associate Research Professor at CIMNE, Barcelona.'
date: 2022-10-24
type: landing

sections:
  - block: profile-biography
    id: about
    content:
      username: me
      headings:
        about: About
        education: Education
        interests: Research interests
    design:
      spacing:
        padding: ['3rem', '0', '3rem', '0']
      background:
        gradient_mesh:
          enable: false
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: research-showcase
    id: research
    content:
      title: Research
      subtitle: Numerical methods that connect scales, physics and computational platforms.
      items:
        - title: Multiscale modelling and turbulent flows
          label: Pseudo-Direct Numerical Simulation
          icon: hero/globe-alt
          companion_image: research/pdns-canonical-model.png
          companion_alt: 'Multiscale P-DNS model coupling a coarse mesh to bulk and wall representative volume elements through dimensionless inputs, inertial stresses and wall shear stress.'
          image: research/pdns.png
          alt: 'Vortical wake structures behind a full-scale Siemens 2.3 MW wind turbine simulated with P-DNS.'
          caption: 'Bulk and wall RVEs coupled to the coarse-scale flow (left); full-scale wind-turbine wake (right). PC Iberia 2026, PDF pages 14–15.'
          text: 'I develop multiscale formulations connecting coarse-scale flow evolution with representative fine-scale problems. My contributions to P-DNS address turbulent boundary layers, particle-laden flows and fine-scale dynamics, with applications in aerodynamics and energy.'
          url: https://doi.org/10.1016/j.cma.2026.119194
          link_text: Explore the wind-turbine study
        - title: Numerical methods for complex flows
          label: Multiphase flows and scientific computing
          icon: hero/beaker
          image: research/coating.png
          alt: 'Two views of an automotive panel during an electrostatic powder-coating simulation, with a colour scale and spray-gun parameters.'
          caption: 'Electrostatic powder coating on an automotive panel. PC Iberia 2026, slide 20.'
          text: 'I combine particle-based methods, multiphase modelling and scientific software development to improve simulation accuracy and efficiency, from incompressible free-surface flows to particulate processes and wind engineering.'
          url: https://doi.org/10.1007/s40571-023-00703-w
          link_text: See the powder-coating study
        - title: Quantum computational mechanics
          label: An emerging research direction
          icon: hero/cpu-chip
          companion_image: research/quantum-circuit.png
          companion_alt: 'Quantum circuit for homogenized kinetic energy, with wave-number, component and ancilla registers, Fourier transforms, rotations, scaling and measurements.'
          image: research/quantum.png
          alt: 'Magnitude of an RVE-inspired periodic velocity fluctuation field at a resolution of 512 by 512, with its colour scale.'
          caption: 'Quantum circuit for homogenized kinetic energy (left); periodic velocity fluctuations at N = 512 (right). PC Iberia 2026, PDF pages 24–25.'
          text: 'I develop quantum spectral methods for incompressible flow and explore quantum–classical multiscale simulation. This direction builds on my experience in numerical methods and coarse–fine coupling within computational mechanics.'
          url: https://doi.org/10.1016/j.cma.2026.119453
          link_text: Read the quantum spectral study
    design:
      spacing:
        padding: ['3rem', '0', '3rem', '0']

  - block: markdown
    id: leadership
    content:
      title: Research leadership
      text: |-
        I lead and co-lead competitively funded research projects and supervise doctoral work in multiscale aerodynamics, particle-based CFD and multiscale thermo-mechanics. As Coordinator of the ERCOFTAC Iberian Pilot Centre, I help connect academic and industrial communities in flow, turbulence and combustion. My work also includes mentoring researchers and leading the development of computational tools for technology transfer.
    design:
      columns: '1'

  - block: markdown
    id: papers
    content:
      title: Selected publications
      text: |-
        **A multiscale Pseudo-DNS approach for solving turbulent boundary-layer problems**

        J. M. Gimenez, F. M. Sívori, A. E. Larreteguy, S. I. Montaño, H. J. Aguerre, N. M. Nigro and S. R. Idelsohn. *Computer Methods in Applied Mechanics and Engineering*, **437**, 117804 (2025). [DOI: 10.1016/j.cma.2025.117804](https://doi.org/10.1016/j.cma.2025.117804)

        **Multiscale simulation of electrostatic powder coating sprays**

        J. M. Gimenez. *Computational Particle Mechanics*, **11**, 1441–1461 (2024). [DOI: 10.1007/s40571-023-00703-w](https://doi.org/10.1007/s40571-023-00703-w)

        **A quantum spectral solver for periodic incompressible Stokes flow**

        J. M. Gimenez, F. Cirak and M. Ortiz. *Computer Methods in Applied Mechanics and Engineering*, **463**, 119453 (2027). [DOI: 10.1016/j.cma.2026.119453](https://doi.org/10.1016/j.cma.2026.119453)

        [Browse all publications](publications/)
    design:
      columns: '1'

  - block: markdown
    id: contact
    content:
      title: Contact
      text: |-
        Juan Marcelo Gimenez — Associate Research Professor

        International Centre for Numerical Methods in Engineering (CIMNE), Barcelona, Spain.

        [jmgimenez@cimne.upc.edu](mailto:jmgimenez@cimne.upc.edu)

        [ORCID](https://orcid.org/0000-0002-8989-7357) · [Scopus](https://www.scopus.com/authid/detail.uri?authorId=54883806800) · [Web of Science](https://www.webofscience.com/wos/author/record/B-4592-2012) · [GitHub](https://github.com/jmarcelogimenez)
    design:
      columns: '1'
---
