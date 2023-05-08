import React from "react";
import { Link } from "gatsby";

export default function Item({ item, type }) {
  return (
    <Link to={`/${type}?id=${item.id}`}>
      <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
        <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
          <img
            src={item.attributes?.image?.data?.attributes?.url}
            alt={item.attributes?.shortDescription}
            className="w-full h-full object-center object-cover sm:w-full sm:h-full"
          />
        </div>
        <div className="flex-1 p-4 space-y-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <h3 className="text-m font-medium text-gray-900">
              <span aria-hidden="true" className="absolute inset-0" />
              {item.attributes?.title
                ? item.attributes?.title
                : `${item.attributes?.firstName} ${item.attributes?.lastName}`}
            </h3>
            <p className="text-base font-medium text-gray-900 text-right">
              {/* todo */}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            {item.attributes?.shortDescription}
          </p>
          <div className="flex-1 flex flex-col justify-end">{/* todo */}</div>
        </div>
      </div>
    </Link>
  );
}
