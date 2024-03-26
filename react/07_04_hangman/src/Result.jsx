const Result = ({ wrong, maxTips }) => {
  return (
    <div id="eredmeny">
      {wrong}/{maxTips}
    </div>
  );
};

export default Result;
