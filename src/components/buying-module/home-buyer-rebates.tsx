import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function HomeBuyerRebates() {
  return (
    <section className="py-16 px-6 lg:px-6 bg-gray-50 text-lg">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-black mb-4 text-left">
          Nova Scotia First-Time Homebuyer Rebates
        </h2>
        <p className="text-gray-600 text-left">
          Entering Nova Scotia’s housing market can be intricate, especially for
          first-time buyers. You likely have numerous queries about saving for a
          down payment, choosing a trustworthy mortgage provider, and
          understanding potential rebates for first-time homebuyers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Nova Scotia First-Time Home Buyers Rebate
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  Provides a rebate of up to $3,000, equivalent to 18.75% of the
                  provincial portion of the HST paid on a newly constructed
                  home.
                </li>
                <li>
                  To qualify, you must be a first-time homebuyer who has not
                  owned and occupied a home in Canada in the last 5 years, and
                  the home must be your primary residence.
                </li>
                <li>
                  Only applies to newly constructed homes, not renovations or
                  conversions from rentals to condominiums.
                </li>
                <li>
                  You have 24 months from the date of sale or occupancy permit
                  to apply for the rebate.
                </li>
              </ul>
              <p className="italic mt-2">
                * Subject to change as per government guidelines. Check the
                official link for updates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              First Home Savings Account (FHSA)
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  Eligibility: Nova Scotia residents must be at least 19,
                  Canadian residents, first-time homebuyers.
                </li>
                <li>
                  Annual contribution limit: $8,000; lifetime limit: $40,000.
                </li>
                <li>
                  Contributions tax-deductible; withdrawals for home purchase
                  tax-free.
                </li>
                <li>
                  Can hold investments like stocks, bonds, mutual funds, and
                  GICs.
                </li>
                <li>Account valid for 15 years or until age 71.</li>
              </ul>
              <p className="italic mt-2">
                * Subject to change as per government guidelines. Check the
                official link for updates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              RRSP Home Buyer’s Plan (HBP)
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  First-time buyers, exceptions for individuals with
                  disabilities.
                </li>
                <li>
                  Withdrawal limit: $60,000 individually, up to $120,000 per
                  couple.
                </li>
                <li>
                  Must be repaid over 15 years starting the second year after
                  withdrawal.
                </li>
                <li>
                  Funds must be in RRSP for 90 days prior; home must be
                  principal residence within one year.
                </li>
              </ul>
              <p className="italic mt-2">
                * Subject to change as per government guidelines. Check the
                official link for updates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
              The Down Payment Assistance Program (DPAP) in Nova Scotia
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>First-time homebuyers; household income under $145,000.</li>
                <li>
                  Canadian citizen or permanent resident residing in Nova Scotia
                  for at least 12 months.
                </li>
                <li>
                  Interest-free loan up to 5% of purchase price (max $25,000).
                </li>
                <li>
                  Loan repayable over 10 years, starting one month after
                  issuance.
                </li>
                <li>Funds for down payment only, not closing costs.</li>
                <li>
                  Processed first-come, first-served basis; apply at least one
                  week before financing deadline.
                </li>
              </ul>
              <p className="italic mt-2">
                * Subject to change as per government guidelines. Check the
                official link for updates.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
