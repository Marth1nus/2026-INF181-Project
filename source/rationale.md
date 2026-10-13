# SME Digital Transformation Presentation Rationale.

## Introduction

_TODO_

### Where is our work is located?

| Resource Name         | Resource Location                                                   |
| :-------------------- | :------------------------------------------------------------------ |
| GitHub Repo (file)    | <https://github.com/Marth1nus/2026-INF181-Project/>                 |
| Presentation Document | <https://marth1nus.github.io/2026-INF181-Project/presentation.html> |
| Rationale Document    | <https://marth1nus.github.io/2026-INF181-Project/rationale.pdf>     |
| Who did what?         | <https://github.com/Marth1nus/2026-INF181-Project/commits/main/>    |

### Group Members

| Student number | Name        | Surname  |
| :------------- | :---------- | :------- |
| 578515         | Marthinus   | Prinsloo |
| 600221         | Willem      | Kruger   |
| 606135         | Travis      | Hanekom  |
| 606091         | Christopher | Visser   |

## Design Goals and Target Audience.

The target audience is small South African retail businesses interested in moving from using manual physical record keeping to an information system to improve operational efficiency. Our design goal is to produce a digital resource that is professional, visually consistent, and easy to navigate. The idea is that a nontechnical user could use the website independently without confusion.

## Structure and Heading Choices

The first 5 headings after the introduction are the requirements from the project PDF. \
Introduction and Conclusions were added where terminology and expectations can be communicated to the audience. \
A Recommendation to the client header was added near the end to propose next steps to the retailer.

Additional motivation in [Explanations per header](#explanations-per-header).

## Explanations per header

### Data and Information Management

The heading of this section remains closely worded to the project brief for convenience sake when marking against the brief. It includes a practical example of how information systems reduce data errors and automate certain operations to add efficiency.

This section informs the retail client what an information system can do in regards to how data is captured and used to improve workflow efficiency.
The content covers how the captured data is processed to assist in improving effiency in the customer, financial and inventory sections of the client. Additionally the different types of information systems are briefly discussed to provide a better idea on how different data is used in different ways to aid in business operations and how the data can be used to optimise the owners decision-making.

### Data Ethics, Privacy, and POPIA compliance.

The section on Data Ethics, Privacy, and POPIA Compliance was added to clarify the necessity for small retail businesses to manage customer data responsibly when transitioning from paper records and spreadsheets to digital information systems. The section presents POPIA and outlines its significance in the collection, storage, and utilization of personal information within a South African retail company.

Instances like loyalty programs, customer contact information, purchase records, and promotional communications were chosen as they represent real scenarios a small retailer might encounter. These instances assist the reader in grasping how privacy and legal obligations relate to routine business operations.

The section additionally addresses access management, safe storage, employee duties, and reactions to data breaches. These subjects were included to demonstrate that safeguarding information necessitates both suitable technology and accountable employee conduct. The ethical dialogue emphasizes confidentiality, equity, clarity, and honoring customers' choices.

This section aims to aid business owners and employees in recognizing the necessity of safeguarding customer information while enabling the business to capitalize on digital systems. Official South African references were chosen to clarify POPIA and offer readers trustworthy information for additional reading.

Reference:

https://www.gov.za/documents/protection-personal-information-act
https://inforegulator.org.za/
https://www.treasury.gov.za/POPIA/
https://www.justice.gov.za/legislation/acts/2013-004.pdf
https://www.justice.gov.za/legislation/acts/2013-004.pdf

AI Assistance Note: ChatGPT was used to help find and organise information about POPIA, privacy and ethical data handling. Sources were identified for further research and verification.

### Artificial Intelligence (AI) and Decision Support.

This section of the document is meant to show the client the value of having data in a central location in order to help automate or analyze business critical resources.
It emphasizes

- Collection of data into a DSS.
- Inference and presentation of data in a DSS.
- Suggestions and patterns present in AI systems within a DSS.
- The value of proper data management.
- The minimization of management cost per resource of proper data management.
- The scaling potential unlocked by the reduced management cost per resource.

There is additional reference to the clearly separated stages that a DSS can be implemented in.
It is clearly shown how they are able to scale into a DSS without needing to make a huge up-front resource investment.
The types of decisions and datapoint are explained in both scope and temporalty so that the client may know more about the kinds of applicability of analytics from a DSS.
The examples provided are simple be design in order to emphasize the universally applicable principles without distracting from the value with complex to understand examples.

Over all the goal was to illustrate the scaling and value additions of DSS and AI systems while silencing the doubts about weather paper systems could provide the same benefits.

### Enterprise Systems and Information System (IS) Integration challenges.

The content displayed on the website under this heading:

> Enterprise systems (such as ERP software) aim to bring the POS, inventory, finance and customer tools together into **one shared system**. Those parts only create value once they actually talk to each other, and that is exactly where integration gets difficult.
>
> **Common limitations**
>
> - **Fragmented systems (data silos):** South African SME retailers typically run many separate apps (POS, stock, accounting, loyalty, payments) that do not integrate. In practice, they install dozens yet keep using only a handful. Reconciling them is manual and error-prone, which leads to spoiled stock, missed sales and insights that never get used.
> - **No single source of truth:** when the till, the stock count and the books disagree, there is no reliable record to manage the business on.
> - **Cascading errors:** because all the functions share one database, a single wrong entry or a bad migration spreads everywhere.
>
> **Integration challenges**
>
> - **Process mismatch:** packaged systems are built around generic processes. When the software does not match how the business actually works, staff fall back to spreadsheets and workarounds.
> - **Connection complexity:** linking the POS, e-commerce, suppliers and banks needs APIs and middleware. Every connection can break when either side changes, and each new tool adds logins, training and fees.
> - **Cost blowouts:** data migration, integration, customisation and training cost far more than the licence fee. Professional setup alone can run to two or three times the annual licence, and real first-year projects overshoot their budgets (one SME budgeted R60,000 but ended up at R180,000).
> - **Skills shortage and change resistance:** most South African businesses say skills shortages hold back digital transformation. Staff who are not trained simply bypass the system, so it never delivers its potential.
> - **Infrastructure realities:** load-shedding, unreliable connectivity and rural coverage limit how much a business can rely on the cloud. Systems must keep working offline and sync when a connection returns.
> - **Compliance and security:** POPIA and SARS (VAT) rules have to be built in from the start, and customer data must be protected.
> - **High failure rate:** a large share of ERP implementations fail or disappoint. The cause is almost never the software; it is poor data, weak planning and under-investment in people.

Reasoning behind this content:

This section responds directly to the project requirement on enterprise systems and integration. The heading was kept as-is because it matches the wording in the project brief, which keeps the presentation easy to mark against the brief.

The content sets honest expectations for the client retailer. Instead of only selling the benefits of enterprise systems, it states the limitations and challenges up front in language the client will recognise from daily operations: scattered apps that do not talk to each other, disagreements between the till and the stock count, load-shedding, and staff resistance. These points were selected because they are the reasons small retailers in South Africa fail to adopt or keep using information systems. Quoted findings such as the fragmented "many apps" reality and the skills shortage give the section authority.

I deliberately listed practical mitigation (training, change management, clean data, phased rollout) alongside each limitation, rather than leaving the reader with a list of problems, so the section flows into the recommendation that follows.

### Adapting and Customizing Information Systems

The content displayed on the website under this heading:

> A retailer has three ways to get software, and the right choice depends on how standard the business processes are.
>
> **Off-the-shelf products (buy)**
>
> - **Pros:** fast to deploy, predictable pricing, the vendor maintains and updates it, and it embeds industry best practice.
> - **Cons:** limited fit (you bend your process to the software), feature bloat, and vendor lock-in with per-user pricing that grows with the business.
> - **Best for:** standard functions every business does, such as accounting, payroll, POS and basic customer management.
>
> **Custom solutions (build)**
>
> - **Pros:** built to your exact workflows, your data model and roadmap stay in your hands, and it can be a genuine competitive advantage.
> - **Cons:** higher upfront cost, slower to deploy, and you own the maintenance, security and upgrades, so you need technical capacity or a reliable partner.
> - **Best for:** the workflow that actually makes you money, when no product models it cleanly.
>
> **Adapted help (configure and extend)**
>
> - **Rule of thumb: configure before you customise.** Most SME retailers should buy good commodity tools and configure them inside the vendor's limits, then build small pieces for the gaps using APIs or low-code connectors.
> - Customisation is possible but expensive, and it can break every time the vendor releases an upgrade.
>
> **A practical test**
>
> Count the spreadsheets sitting next to the current system. **Each spreadsheet marks a place where the software did not fit.** If the missing workflow is standard across your industry, buy the closest product. If it is what makes your business different, that is the part worth building or integrating.

Reasoning behind this content:

The project requires a comparison of existing product offerings, custom solutions, and adapted help. I structured this section as a build-buy-adapt decision, because that is the decision a small retailer actually faces.

Three routes are presented in plain terms: off-the-shelf (buy), custom (build), and configuration/extension (adapted), with short pros/cons and a realistic best-use case for each. Framing it as a decision avoids favouring technology for its own sake: standard functions like accounting and payroll should always be bought, while only the workflow that differentiates the business justifies building.

The presentation argues for "configure before you customise" and ends with the spreadsheet test (each spreadsheet beside the current system marks a place the software did not fit). That test is intentionally memorable and actionable, and it gives the client a concrete way to decide between the three routes on their own.

### Practical Recommendation

The content displayed on the website under this heading:

> **Recommended plan for a small retailer**
>
> 1. **Assess first:** map how money, stock and customers move through the shop, and define clear outcomes and success metrics before buying anything.
> 2. **Consolidate, don't accumulate:** choose one integrated system covering POS, inventory, accounting and customers (one or two tools that talk to each other) instead of adding more disconnected apps.
> 3. **Do vendor due diligence:** demand a live demo on your own data, check for local support, POPIA and SARS (VAT) readiness, offline capability for load-shedding, and references from similar retailers.
> 4. **Clean your data before migrating:** duplicate and incomplete records will wreck even a good system. Migrate only what the business needs and test the migration.
> 5. **Configure, then customise:** start from the vendor's defaults and only build what is genuinely unique to the business.
> 6. **Train by role and manage change:** train each person on the tasks they actually do, appoint a super user in the shop, and involve staff early so they take ownership.
> 7. **Go live in phases:** pilot one till or branch first, verify the results, then roll out to the rest. Keep the old records accessible during the move and arrange concentrated support (hypercare) for the first few weeks.
> 8. **Review and improve:** compare key indicators such as stock accuracy, cash-up differences, turnover and margins against the baseline, fix repeated problems, and plan the next phase.
>
> **Realistic budgeting**
>
> The complete cost is more than the monthly fee. Plan for licensing, setup (often two to three times the annual licence), data migration, customisation, training and hardware, and add a **50–100% contingency** for the first year.

Reasoning behind this content:

This is the call-to-action section of the presentation. It turns the earlier theory into a step-by-step plan that a small retailer could follow immediately, so the audience leaves with something they can use rather than a general discussion of information systems.

The plan is based on the success factors found consistently across the literature and local practice for SME and South African ERP/IS implementations: define outcomes before purchase, consolidate rather than accumulate tools, vendor due diligence with a live demo on real data, data cleaning before migration, configuration over customisation, role-based training, change management, phased go-live with a pilot, and hypercare after launch.

I ended with a realistic budgeting note (setup often two to three times the annual licence, plus a 50–100% contingency) because cost surprises are the most common reason South African SME projects are abandoned half-way. The eight steps are written so each maps to a named owner or decision in the business.

## Visual Design and Usability

For ease of content writing the source files are written in [Markdown](https://en.wikipedia.org/wiki/Markdown). \
Markdown allows for html elements to be inserted and renders to html. \
A simple css style sheet is used to format the document.

GitHub Actions and Pages are used to run a NodeJS script that renders the markdown files to an html page and \
Chromium is used to render the html and create a PDF from the html content.

Our team is able to update the written and document formatting in Markdown while using an external CSS file to provide additional styling if desired. \
The Continuos Deployment (CD) also means that we get a HTTPS output URL that stays in sync with the contents of our repo.

Here are some decisions made for the visual presentation:

- _TODO_
- _TODO_
- _TODO_

## AI Disclaimer

For a per file break-down see [AI use record](https://github.com/Marth1nus/2026-INF181-Project/#ai-use)

- [`ChatGPT`](https://chatgpt.com) was used to assist with scripts generating and deploying the output files (`presentation.html` and `rationale.pdf`) from the markdown source files.
- An AI assistant (opencode) was used to help with the wording of the Enterprise Systems and IS Integration, Adapting and Customizing Information Systems, and Practical Recommendation sections. The wording was reviewed and edited manually.

## Conclusion

_TODO_

## References

- de Wet, A. (2026). _The app graveyard – why retail tech fails SMEs_. BusinessBrief. https://www.bbrief.co.za/2026/03/31/the-app-graveyard-why-retail-tech-fails-smes/
- Heuer, C. (2025). _Breaking cloud ERP adoption barriers for South African SMEs_. Astraia. https://www.astraia.co.za/breaking-cloud-erp-adoption-barriers-for-south-african-smes/
- Hasheela-Mufeti, V., & Smolander, K. (2019). _What are the requirements of a successful ERP implementation in SMEs? Special focus on Southern Africa_. International Journal of Information Systems and Project Management, 7(2), 23–40. https://aisel.aisnet.org/ijispm/
- MDPI Information (2021). _Risk factors when implementing ERP systems in small companies_, 12(11), 478. https://www.mdpi.com/2078-2489/12/11/478
- PKF South Africa (2025). Skills shortage research (as cited in de Wet, 2026).
- FinMark Trust (2024). _FinScope MSME South Africa 2024 survey_ (as cited in de Wet, 2026).
