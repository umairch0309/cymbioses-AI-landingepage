import { UploadsContainer, UploadItem } from "@/styles/EHRStyled";

import {
  ClientDetailsContainer,
  ClientInfoItem,
  ClientInfoLabel,
  ClientInfoValue,
  UpdateProfileButton,
} from "@styles/ClientDetailStyled";
import { HeadingStyled } from "@styles/ElementsStyled";
import { PaperclipIcon } from "lucide-react";

const InsuranceDetails = ({ insurance }) => {
  return (
    <ClientDetailsContainer className="h-100">
      <HeadingStyled $size="12px" className="text-grey mb-3">
        INSURANCE DETAILS
      </HeadingStyled>

      <div className="client-info">
        <ClientInfoItem>
          <ClientInfoLabel>Provider</ClientInfoLabel>
          <ClientInfoValue>{insurance.provider}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Policy Number</ClientInfoLabel>
          <ClientInfoValue>{insurance.policyNumber}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Receipent</ClientInfoLabel>
          <ClientInfoValue>{insurance.receipent}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Validity</ClientInfoLabel>
          <ClientInfoValue>{insurance.validity}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem className="align-items-start">
          <ClientInfoLabel>Uploads</ClientInfoLabel>
          <ClientInfoValue>
            <UploadsContainer>
              {insurance.uploads.map((upload, index) => (
                <UploadItem key={index}>
                  <PaperclipIcon size="16px" />
                  {upload}
                </UploadItem>
              ))}
            </UploadsContainer>
          </ClientInfoValue>
        </ClientInfoItem>
      </div>

      <div className="client-actions mt-5">
        <UpdateProfileButton>Issue Invoice</UpdateProfileButton>
      </div>
    </ClientDetailsContainer>
  );
};

export default InsuranceDetails;
