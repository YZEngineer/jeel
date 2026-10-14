<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the program's single-page presentation at the index route, using section anchors for its related content; this keeps the supplied program readable in one journey.
- Use global semantic design tokens and shared Button/Dialog controls; this keeps presentation and interaction consistent.
- Load Arabic fonts through root head links and define font roles in global CSS; this supports SSR-safe typography.
- Do not collect registration data without a connected registration destination; show an honest availability dialog until one is supplied.
