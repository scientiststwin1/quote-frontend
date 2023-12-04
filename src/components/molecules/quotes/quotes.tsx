import Quote, { QuoteProps } from './quote';

type QuotesProps = {
  quotes: QuoteProps[];
};

const Quotes: React.FC<QuotesProps> = (props) => {
  return (
    <ul className="py-2 space-y-4">
      {props.quotes.map((quote) => (
        <Quote key={quote.id} {...quote} />
      ))}
    </ul>
  );
};

export default Quotes;
