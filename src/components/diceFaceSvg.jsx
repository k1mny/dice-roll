export default function DiceSvg({ index, ...props }) {
  switch (index) {
    case 1:
      return <DiceSvgOne {...props} />;
    case 2:
      return <DiceSvgTwo {...props} />;
    case 3:
      return <DiceSvgThree {...props} />;
    case 4:
      return <DiceSvgFour {...props} />;
    case 5:
      return <DiceSvgFive {...props} />;
    case 6:
      return <DiceSvgSix {...props} />;
    default:
      return null;
  }
}

const DiceSvgOne = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};

const DiceSvgTwo = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(1,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};

const DiceSvgThree = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(1,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};

const DiceSvgFour = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(1,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};

const DiceSvgFive = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(1,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};

const DiceSvgSix = ({ height, width }) => {
  return (
    <svg
      style={{ height: height, width: width }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
      <g transform="translate(1,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill="#fff"
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  );
};
