export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          عن <span className="text-indigo-600">المنصة</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
        <p className="text-lg text-primary leading-relaxed max-w-3xl mx-auto">
          نحن
          <span className="font-semibold text-indigo-600 mx-2">
            منصة تعليمية إلكترونية
          </span>
          تهدف إلى تمكين المتعلمين من تطوير مهاراتهم عبر الإنترنت من خلال محتوى
          تفاعلي، دورات عالية الجودة، وأساتذة متميزين في مختلف المجالات. نؤمن
          بأن التعلم رحلة مستمرة، ونوفر لك الأدوات التي تساعدك على تحقيق أهدافك
          التعليمية والمهنية.
        </p>
      </div>
    </section>
  );
}
