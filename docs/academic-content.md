# Maintaining Publications and Projects

## Publications

The initial collection contains the 43 public works in ORCID
[0000-0002-8989-7357](https://orcid.org/0000-0002-8989-7357), retrieved on
2026-11-06. This is the scope of the import, not a claim that the ORCID record
contains every publication. Full contributor lists and citation fields come
from ORCID, supplemented by Crossref metadata where available. No private CV
files or article PDFs are distributed.

Each `content/publications/<year-title>/` bundle contains `index.md` and
`cite.bib`. To add or correct an entry:

1. Verify title, author order, venue, DOI and publication year against the publisher.
2. Use the structured `publication` map and `hugoblox.ids.doi` fields. Publication
   types are `article-journal`, `chapter` or `paper-conference`.
3. Use `date` for bibliographic sorting and `publishDate` for the date the web
   entry can appear. An already-public article assigned to a future journal issue
   must remain visible; do not treat its issue year as an embargo.
4. Update the bundle's `cite.bib` and the matching entry in
   `static/uploads/publications.bib` together. BibTeX keys are stable ORCID work IDs.

The list uses issue dates from Crossref when supplied, otherwise the dates in
ORCID. The two Springer contributions with chapter DOIs are classified as book
chapters; the MECOM proceedings contribution is classified as a conference paper.
A conference record with no DOI links to its ORCID record. The list and all
individual pages are static; filters progressively enhance the complete list
without requesting data from third parties.

## Projects

Each `content/projects/<slug>/index.md` has explicit role, period, funding
programme and reference. Project descriptions derive from the supplied CVA
(November 2026). `project_group: leadership` is reserved for PI/co-PI roles;
`collaboration` covers other participation. Joint PI roles are labelled Co-PI.
Dates are given as years; January 1 in front matter is only a sorting key.

Funding amounts are omitted because the source CVs contain differences.
No proposed ERC project or unpublished proposal narrative is included. Existing
public institutional project links are added where identified; missing links
are omitted rather than guessed. Add confirmed sources when updating records.

## Validation

Use the pinned Hugo Extended and pnpm versions with Node 22, then run
`pnpm run build`. Check the publications list with combined search/year/type
filters, an empty result and reset; verify BibTeX downloads and individual pages.
Check project grouping and base-path navigation on both desktop and mobile.
