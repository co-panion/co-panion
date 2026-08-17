import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

interface SwaggerViewerProps {
  url: string;
}

export const SwaggerViewer: React.FC<SwaggerViewerProps> = ({ url }) => {
  return (
    <div className="swagger-wrapper bg-white rounded-lg p-4 mt-4">
      <SwaggerUI url={url} />
    </div>
  );
};
