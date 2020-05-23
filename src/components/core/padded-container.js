import styled from "styled-components";

const maxWidth = "1920px";

// Provides a consistent max-width, while allowing background-colors to encompass screen dims.
const PaddedContainer = styled.div`
  margin: 0 32px;
  padding: 0 calc((100vw - ${maxWidth}) / 2);
`;

export default PaddedContainer;
