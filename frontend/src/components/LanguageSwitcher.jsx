import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const change = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <select
      aria-label="Language"
      className="select select-bordered w-auto"
      value={i18n.language}
      onChange={(e) => change(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="ja">日本語</option>
    </select>
  );
}
