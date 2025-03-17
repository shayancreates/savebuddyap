export default function CardGroupSaveBuddy() {
  return (
    <>
      <div className="container py-24 lg:py-32">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border rounded-xl">
            <div className="p-4 lg:p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Total Savings */}
                <div className="relative text-center">
                  <svg
                    className="shrink-0 size-6 sm:size-8 mx-auto text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3V9" />
                    <circle cx="12" cy="15" r="6" />
                    <path d="M8 15h8" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">$10M+</h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Saved by our users
                    </p>
                  </div>
                </div>

                <div className="relative text-center">
                  <svg
                    className="shrink-0 size-6 sm:size-8 mx-auto text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">95%</h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Customer satisfaction
                    </p>
                  </div>
                </div>

                <div className="relative text-center">
                  <svg
                    className="shrink-0 size-6 sm:size-8 mx-auto text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold">50K+</h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Goals successfully reached
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
