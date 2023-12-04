import { useEffect, useState } from 'react';
import Button from './components/atoms/button/button';
import LabeledInput from './components/molecules/labeledInput/labeledInput';
import LabeledTextArea from './components/molecules/labeledTextArea/labeledTextArea';
import Quotes from './components/molecules/quotes/quotes';
import quoteService from './service/quote.service';

const App: React.FC = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [newQuote, setNewQuote] = useState<{
    id: string;
    author: string;
    text: string;
    new: boolean;
  }>({
    author: '',
    text: '',
    new: true,
    id: '',
  });

  const onDeleteHandler = (id: string) => {
    quoteService.delete(id).then(() => {
      setQuotes((lastQuotes: any) => {
        console.log('>>', lastQuotes);
        return lastQuotes.filter((quote: any) => quote.id !== id);
      });
    });
  };

  const updateQuote = () => {
    quoteService
      .update(newQuote.id, { text: newQuote.text, author: newQuote.author })
      .then((data) => {
        setQuotes((lastQuotes: any) => {
          console.log('>>', lastQuotes);
          return lastQuotes.map((quote: any) => {
            if (quote.id == newQuote.id) {
              return { ...quote, text: data.text };
            }
          });
        });
      });
  };

  const onEditHandler = (id: string, text: string, author: string) => {
    setNewQuote({
      text: text,
      author: author,
      new: false,
      id: id,
    });
  };

  const onAddHandler = () => {
    quoteService.create(newQuote).then((data) => {
      setQuotes((lastQuotes) => {
        const newQuote = [
          ...lastQuotes,
          { ...data, onDelete: onDeleteHandler, onEdit: onEditHandler },
        ];
        return newQuote;
      });
    });
  };

  const onAddAuthorHandler = (event: any) => {
    setNewQuote({ ...newQuote, author: event.target.value });
  };

  const onAddTextHandler = (event: any) => {
    setNewQuote({ ...newQuote, text: event.target.value });
  };

  useEffect(() => {
    quoteService.getAll().then((quotes) => {
      const filteredQuotes = quotes.map((quote: any) => ({
        id: quote?.id,
        text: quote?.text,
        author: quote?.author,
        onDelete: onDeleteHandler,
        onEdit: onEditHandler,
      }));
      setQuotes(filteredQuotes);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-16 ">
      <form className="flex flex-col justify-start w-1/2 space-y-5 border-1 border-black">
        <LabeledTextArea
          value={newQuote.text}
          text="Quote Text"
          onChange={(event) => onAddTextHandler(event)}
        />
        <LabeledInput
          value={newQuote.author}
          text="Author Name"
          type="text"
          onChange={(event) => onAddAuthorHandler(event)}
        />
        {newQuote.new ? (
          <Button text="Add" onClick={onAddHandler} />
        ) : (
          <Button text="Update" onClick={updateQuote} />
        )}
      </form>

      <section className="w-1/2">
          <Quotes quotes={quotes} />
      </section>
    </div>
  );
};

export default App;
