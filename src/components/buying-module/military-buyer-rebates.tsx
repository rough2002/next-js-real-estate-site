import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function MilitaryBuyerRebates() {
  return (
    <section className="py-16 px-6 lg:px-6 bg-gray-50 text-lg">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-black mb-4 text-left">
          Housing assistance for military relocation
        </h2>
        <p className="text-gray-600 text-left">
          In a military relocation, quickly finding and moving to a new home are
          crucial tasks. Additionally, if you own property at your current post,
          you’ll likely want to sell it before moving. If you’re renting, you’ll
          need to terminate your lease on short notice. Recognizing the
          challenges and costs involved, the CAFRD offers specific benefits to
          ease the relocation burden. The directive provides funds and
          logistical support for these processes, including:
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Standard House Hunting Trip (HHT)
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  <b>Purpose: </b>
                  The main goal of an HHT is to secure permanent accommodation
                  (rent or purchase) at the new place of duty and coordinate
                  dates for disposing of the old residence and acquiring the new
                  one to facilitate a door-to-door move.
                </li>
                <li>
                  <b>Eligibility: </b>
                  Members are eligible for an HHT once they have received
                  official notification of their posting and prior to their
                  Change of Strength (COS) date.
                </li>
                <li>
                  <b>Participants: </b>
                  The HHT is typically for the member and their spouse. Expenses
                  for these two individuals are funded from the Core Account.
                </li>
                <li>
                  <b>Funding: </b>
                  Transportation, accommodation, meals, and incidental expenses
                  for the member and spouse are covered under the Core Account.
                </li>
                <li>
                  <b>Timing: </b>
                  The HHT should be taken before the actual relocation to
                  minimize interim accommodation costs and facilitate a smoother
                  transition.
                </li>
              </ul>
              <p className="italic mt-2">
                * The above-mentioned information is subject to change as per
                government guidelines. We recommend checking the official link{" "}
                {"\t"}
                <a
                  href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/relocation-directive/2018/chapter-4.html"
                  className="text-blue-500"
                >
                  (House Hunting Trip (HHT))
                </a>
                {"\t"} for any latest changes before proceeding with the
                information.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Interim Lodgings, Meals, and Miscellaneous (ILM&M)
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  <b>Purpose: </b>
                  ILM&M is intended to reimburse expenses incurred at the move
                  origin and destination when members and their dependants are
                  separated from their HG&E during packing, loading, unloading,
                  and unpacking.
                </li>
                <li>
                  <b>Duration: </b>
                  Typically, ILM&M covers: Up to 3 nights and 3 days for
                  packing, loading, and cleaning at the origin, Up to 2 nights
                  and 2 days for unloading and unpacking at the destination.
                </li>
                <li>
                  <b>Expenses covered: </b>
                  Meal entitlements (daily allowance), Commercial lodgings,
                  Non-commercial lodgings, Miscellaneous allowance.
                </li>
                <li>
                  <b>Meal allowances: </b>
                  Provided for the member, spouse/partner, dependants, and
                  extended family. Reduced to 65% of the daily meal allowance
                  after the first 10 days of interim accommodation
                </li>
              </ul>
              <p className="italic mt-2">
                * The above-mentioned information is subject to change as per
                government guidelines. We recommend checking the official link
                {"\t"}
                <a
                  href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/relocation-directive/cafrd/chapter-5.html"
                  className="text-blue-500"
                >
                  (ILM&M)
                </a>
                {"\t"} for any latest changes before proceeding with the
                information.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              Shipment of Household Goods and Effects (HG&E)
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  <b>Purpose: </b>
                  The employer arranges and pays for packing, insuring,
                  shipping, in-transit storage, and unpacking of a reasonable
                  quantity of personal and household effects from an employee’s
                  principal residence on relocation.
                </li>
                <li>
                  <b>Weight Entitlement: </b>
                  The basic entitlement covers up to 20,000 lb/9,071.94 kg of
                  HG&E, paid from the Basic Core Fund. Any weight exceeding this
                  limit is covered by the Core Customized Fund.
                </li>
                <li>
                  <b>Employee Responsibilities: </b>
                  Employees must complete necessary HGRS forms and submit them
                  to their Departmental Regional/National Coordinator. They must
                  also provide a copy of the original bill of lading to credit
                  their funding envelopes.
                </li>
                <li>
                  <b>Additional Items: </b>
                  The shipment of recreational vehicles, boats, motorcycles,
                  ATVs, trailers, and snowmobiles is covered under the Core
                  Customized Fund.
                </li>
                <li>
                  <b>Insurance: </b>
                  Basic replacement cost insurance is provided, with the option
                  for additional insurance coverage.
                </li>
              </ul>
              <p className="italic mt-2">
                The above-mentioned information is subject to change as per
                government guidelines. We recommend checking the official link{" "}
                {"\t"}
                <a
                  href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/relocation-directive/2018/chapter-9.html"
                  className="text-blue-500"
                >
                  (ILM&M)
                </a>
                {"\t"} for any latest changes before proceeding with the
                information.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
              The Down Payment Assistance Program (DPAP) in Nova Scotia
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <ul className="list-disc ml-5 text-gray-600">
                <li>
                  <b>Purpose: </b>
                  TDRA is designed to offset expenses associated with
                  maintaining two residences when a member’s former residence
                  remains unsold, vacant, and actively marketed.
                </li>
                <li>
                  <b>Duration: </b>
                  The Core Account covers TDRA expenses for up to six months.
                  Additional months can be reimbursed from the Custom Account.
                </li>
                <li>
                  <b>Cessation: </b>
                  TDRA ceases on the day the sale of the former residence is
                  finalized.
                </li>
                <li>
                  <b>Restrictions: </b>
                  Members posted outside of Canada are not entitled to TDRA for
                  any days they have been reimbursed under CBI 10.5.11 (Waiver
                  of Rent Share).
                </li>
                <li>
                  <b>Reverse TDRA (RTDRA): </b>
                  This benefit applies when a member takes possession of a
                  replacement residence before moving their Household Goods and
                  Effects (HG&E) from their current residence. RTDRA covers
                  similar expenses as TDRA but for the new residence.
                </li>
              </ul>
              <p className="italic mt-2">
                * The above-mentioned information is subject to change as per
                government guidelines. We recommend checking the official link{" "}
                {"\t"}
                <a
                  href="https://www.canada.ca/en/department-national-defence/corporate/policies-standards/relocation-directive/cafrd/chapter-8.html#8-2-07"
                  className="text-blue-500"
                >
                  (TDRA)
                </a>
                {"\t"} for any latest changes before proceeding with the
                information.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
