import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from 'react-i18next';

const NotesNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">{t('noNotesTitle')}</h3>
      <p className="text-base-content/70">{t('noNotesText')}</p>
      <Link to="/create" className="btn btn-primary">
        {t('createFirstNote')}
      </Link>
    </div>
  );
};
export default NotesNotFound;
