export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Sananjayan Paramanantharajah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
