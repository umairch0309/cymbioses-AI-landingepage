import { useState } from "react";
import {
  SectionContainer,
  SectionTitle,
  RecordingArea,
  RecordButton,
  RecordingControls,
  StartRecordingButton,
} from "@styles/SessionStyled";
import { ReactSVG } from "react-svg";
import { ChevronDown, ChevronRightIcon, MicIcon } from "lucide-react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

const RecordingSection = ({
  isRecording,
  onStartRecording,
  onStopRecording,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <SectionContainer className="border">
      <div className="section-header mb-3">
        <SectionTitle>MEDIA DETAILS</SectionTitle>
        <ChevronRightIcon size={16} />
      </div>

      <RecordingArea>
        <ReactSVG className="mb-4" src="/images/cloud-upload.svg" />

        <RecordingControls>
          <RecordButton
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            $isOpen={isDropdownOpen}
          >
            <MicIcon size={20} />
            Record Audio
            <ChevronDown size={20} />
          </RecordButton>

          <StartRecordingButton
            onClick={isRecording ? onStopRecording : onStartRecording}
          >
            {!isRecording ? (
              <BsPlayFill size={20} />
            ) : (
              <BsPauseFill size={20} />
            )}
            {isRecording ? "Stop recording" : "Start recording"}
          </StartRecordingButton>
        </RecordingControls>
      </RecordingArea>
    </SectionContainer>
  );
};

export default RecordingSection;
