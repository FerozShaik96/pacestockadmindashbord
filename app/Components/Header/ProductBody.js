import { Data } from "@/app/Data/Data";
import Image from "next/image";
import Line from "@/public/Line.png";
export default function ProductBody() {
  return (
    <div className="relative mt-6">
      <div className="absolute left-[-10] top-12">
        <Image src={Line} alt="Line" className="w-full" />
      </div>
      <div className="px-10 pt-1">
        <table>
          <thead>
            <tr className="w-full">
              <th className="whitespace-nowrap py-3 pe-10 text-left text-sm font-normal text-search-text">
                Customer Name
              </th>
              <th className="px-8 py-3 text-left text-sm font-normal text-search-text">
                Company
              </th>
              <th className="whitespace-nowrap px-8 py-3 text-left text-sm font-normal text-search-text">
                Phone Number
              </th>
              <th className="px-8 py-3 text-left text-sm font-normal text-search-text">
                Email
              </th>
              <th className="px-8 py-3 text-left text-sm font-normal text-search-text">
                Country
              </th>
              <th className="py-3 text-left text-sm font-normal text-search-text">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm font-light text-gray-600">
            {Data.map((customer, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="w-auto py-6 pe-10 text-left text-xs font-semibold text-prod-text">
                  {customer.customerName}
                </td>
                <td className="w-auto px-8 py-6 text-left text-xs font-semibold text-prod-text">
                  {customer.company}
                </td>
                <td className="w-auto whitespace-nowrap px-8 py-6 text-left text-xs font-semibold text-prod-text">
                  {customer.phoneNumber}
                </td>
                <td className="w-auto px-8 py-6 text-left text-xs font-semibold text-prod-text">
                  {customer.email}
                </td>
                <td className="w-auto whitespace-nowrap px-8 py-6 text-left text-xs font-semibold text-prod-text">
                  {customer.country}
                </td>
                <td className="w-auto py-6 text-left text-xs font-semibold text-prod-text">
                  <span
                    className={`rounded-md border py-1 text-xs font-semibold text-prod-text ${customer.status ? "border-1 border-prod-true-border bg-prod-true px-6 text-prod-text-True" : "border-1 border-prod-flase-border bg-prod-false px-4 text-prod-flase-border"}`}
                  >
                    {customer.content}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
