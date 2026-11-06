# Research figures on the Home page

Extracted from the original embedded image objects in the author-supplied
presentation **Multiscale simulation of turbulent and particulate flows.
Towards quantum-accelerated solvers**, Juan M. Gimenez, PC Iberia Meeting 2026
(`Gimenez_CIMNE.pdf`, 29 slides). Extraction preserves the original pixels,
scientific colours and available legends. Original PDF soft masks are retained
as PNG alpha channels where present. No generative changes are applied.

| Asset | Source | Native image / extraction |
| --- | --- | --- |
| `pdns.png` | Slide 15, full-scale Siemens 2.3 MW wind turbine; related paper DOI 10.1016/j.cma.2026.119194 | PDF image object 764 (1916 × 964 px), soft mask restored, turbine region `(870, 10, 1468, 820)` extracted as 598 × 810 px |
| `coating.png` | Slide 20, electrostatic powder coating on an automotive panel; related methodology DOI 10.1007/s40571-023-00703-w | PDF image object 982, full original 1494 × 812 px, including both views, scale and parameters |
| `quantum.png` | Slide 25, periodic fluctuation field at N = 512; related paper DOI 10.1016/j.cma.2026.119453 | PDF image object 1143, full original 833 × 767 px, including axes and colour scale, soft mask restored |

Extraction uses `pdfimages -f <slide> -l <slide> -png`. For slide 15 the image
and mask are files 009 and 010; for slide 20 the image is file 001; for slide 25
the image and mask are files 000 and 001. Crop coordinates are Pillow's
`(left, top, right, bottom)` coordinates in original image pixels. The turbine
is isolated from the composite without including the neighbouring mesh or plot.
The mask rectangle `(1420, 480, 1468, 820)` excludes only the adjacent power-plot
axis label; it does not intersect the turbine or wake.

These replace page-rasterised figures previously extracted from the papers.
The presentation itself is not distributed with the website. Its institutional
application examples, under-review result and research-direction diagram are
not included.

The website generates responsive WebP assets through Hugo. Titles, captions,
alt text and article links are maintained in `content/_index.md`. A related
article link identifies the research method; it does not imply every slide
image was a figure in that article.

## Canonical-flow model alongside the turbine

`pdns-canonical-model.png` is the left-hand diagram from PDF page 14
(the final overlay of the canonical-building-blocks slide). It shows the bulk
and wall RVEs coupled to the coarse-scale mesh. The vector diagram is rendered
with `pdftoppm` at 450 dpi using crop rectangle `(30, 210, 900, 930)`
(`x`, `y`, `width`, `height` in rendered pixels). Labels and arrows are preserved.
The website provides a full-resolution link for reading the diagram labels.

## Quantum circuit alongside the fluctuation field

`quantum-circuit.png` is the circuit for homogenized kinetic energy from PDF
page 24 (the circuit slide before the fluctuation-field overlay). The vector
circuit is rendered at 450 dpi using crop rectangle `(1230, 405, 1155, 540)`
(`x`, `y`, `width`, `height` in rendered pixels). Register and gate labels are
preserved. Clicking the diagram opens its full-resolution image.
