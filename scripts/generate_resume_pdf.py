# One-off script to generate public/resume.pdf — a redacted resume summary
# (no phone, home address, birthdate, or gender) built from the user's
# education, work history, and certification data. Not part of the app build.
import os

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)
from reportlab.lib.styles import ParagraphStyle

pdfmetrics.registerFont(TTFont("NotoJP", r"C:\Windows\Fonts\NotoSansJP-VF.ttf"))

FONT = "NotoJP"
ACCENT = colors.HexColor("#2563eb")
DARK = colors.HexColor("#0f172a")
GRAY = colors.HexColor("#475569")

styles = {
    "name": ParagraphStyle("name", fontName=FONT, fontSize=22, leading=26, textColor=DARK),
    "role": ParagraphStyle("role", fontName=FONT, fontSize=11, leading=14, textColor=ACCENT, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName=FONT, fontSize=9.5, leading=13, textColor=GRAY),
    "h2": ParagraphStyle("h2", fontName=FONT, fontSize=13, leading=16, textColor=DARK, spaceBefore=14, spaceAfter=6),
    "body": ParagraphStyle("body", fontName=FONT, fontSize=9.5, leading=14.5, textColor=DARK, alignment=TA_LEFT),
    "small": ParagraphStyle("small", fontName=FONT, fontSize=9, leading=13, textColor=GRAY),
    "tablehead": ParagraphStyle("tablehead", fontName=FONT, fontSize=9, leading=12, textColor=GRAY),
    "tablecell": ParagraphStyle("tablecell", fontName=FONT, fontSize=9.5, leading=13, textColor=DARK),
}

story = []

story.append(Paragraph("Hein Htet　ヘイン テッ", styles["name"]))
story.append(Paragraph("IT / Web Developer － Osaka, Japan", styles["role"]))
story.append(Spacer(1, 4))
story.append(
    Paragraph(
        "Email: littleshadow.mdy@gmail.com　|　GitHub: github.com/solo-leveling　|　"
        "LinkedIn: linkedin.com/in/hein-htet-b88388383",
        styles["contact"],
    )
)
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceAfter=4))

# --- 職歴 (Work Experience) ---
story.append(Paragraph("職歴 / Work Experience", styles["h2"]))
exp_table = Table(
    [
        [
            Paragraph("2020年1月 － 2022年4月", styles["tablecell"]),
            Paragraph(
                "Scala Next Inc.（Mandalay Branch）　Webアプリケーションエンジニア<br/>"
                "PHP（Laravel）での設計・実装・テストの研修を修了後、社内の料理関連Webサービスの"
                "保守・改修を担当。既存仕様の理解、単体テストの作成、バグ調査・修正、"
                "フロントエンド／バックエンドの実装を行った。",
                styles["tablecell"],
            ),
        ]
    ],
    colWidths=[38 * mm, 132 * mm],
)
exp_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(exp_table)

# --- 学歴 (Education) ---
story.append(Paragraph("学歴 / Education", styles["h2"]))
edu_rows = [
    ("2015年3月", "Conqueror Academy of Education（高等学校）卒業　－　ミャンマー"),
    ("2015年12月 － 2017年3月", "Mandalay University of Foreign Languages（ドイツ語学科）中途退学"),
    ("2017年12月 － 2019年12月", "Metro IT and Japanese Language Center（専門学校）卒業　－　ミャンマー"),
    ("2022年10月 － 2024年3月", "メリック日本語学校　卒業"),
    ("2024年4月 － 2025年3月", "エール学園　応用日本語学科　国公立進学コース　卒業"),
    ("2025年4月 － 2027年3月（卒業見込み）", "エール学園ict校　AIビジネス学科　AI技術活用コース"),
]
edu_data = [
    [Paragraph(d, styles["tablecell"]), Paragraph(s, styles["tablecell"])] for d, s in edu_rows
]
edu_table = Table(edu_data, colWidths=[48 * mm, 122 * mm])
edu_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(edu_table)

# --- 資格 (Certifications) ---
story.append(Paragraph("免許・資格 / Certifications", styles["h2"]))
cert_rows = [
    ("2018年6月", "IT Passport 試験 合格"),
    ("2024年7月", "日本語能力試験 N1 合格"),
    ("2026年2月", "TOEIC Listening and Reading 790点 取得"),
    ("2026年9月", "AWS Certified Cloud Practitioner － Amazon Web Services"),
]
cert_data = [
    [Paragraph(d, styles["tablecell"]), Paragraph(s, styles["tablecell"])] for d, s in cert_rows
]
cert_table = Table(cert_data, colWidths=[38 * mm, 132 * mm])
cert_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)
story.append(cert_table)

# --- 自己PR ---
story.append(Paragraph("自己PR / Self-PR", styles["h2"]))
story.append(
    Paragraph(
        "私の強みは、自分で調べながら学び続けられることです。プログラミングを学ぶ中で、"
        "分からないことがあっても、まず公式ドキュメントや技術記事を調べ、自分で考えながら"
        "解決するようにしています。必要に応じてAIも活用しますが、そのまま答えを使うのではなく、"
        "「なぜこの書き方になるのか」を確認し、自分で動かしながら理解することを大切にしています。"
        "学んだことはGitHubで公開しながら、実践的にスキルを身につけています。"
        "また、日本語・英語・ビルマ語の3言語でコミュニケーションができ、多文化の環境でも"
        "問題なくやり取りできます。",
        styles["body"],
    )
)

story.append(Spacer(1, 14))
story.append(
    Paragraph(
        "この履歴書は個人情報保護のため、住所・電話番号・生年月日を除いた要約版です。"
        "詳細は面談時に別途ご提供いたします。",
        styles["small"],
    )
)

doc = SimpleDocTemplate(
    os.path.join(os.path.dirname(__file__), "..", "public", "resume.pdf"),
    pagesize=A4,
    leftMargin=20 * mm,
    rightMargin=20 * mm,
    topMargin=18 * mm,
    bottomMargin=18 * mm,
    title="Hein Htet - Resume",
)
doc.build(story)
print("resume.pdf generated")
