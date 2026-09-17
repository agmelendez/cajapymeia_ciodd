import json
import re
import os

workspace_dir = "/Users/agustingomez/Downloads/0. Caja Herramienta PYMEs Version 3.0"
txt_file = os.path.join(workspace_dir, "scratch_doc_v23_text.txt")

with open(txt_file, "r", encoding="utf-8", errors="ignore") as f:
    raw_text = f.read()

# Clean UTF-8 artifacts
text = (raw_text
    .replace('ðŸ †', '🏆')
    .replace('ðŸ†•ðŸ ¢', '🆕🏢')
    .replace('ðŸ“‹', '📋')
    .replace('â€”', '—')
    .replace('â€“', '–')
    .replace('ðŸ’💡', '💡')
    .replace('ðŸ’', '💡')
    .replace('âœ✓', '✓')
    .replace('âœï🏽', '✍️')
    .replace('Â·', '·')
    .replace('Â¿', '¿')
    .replace('Â¡', '¡')
    .replace('Ã¡', 'á')
    .replace('Ã©', 'é')
    .replace('Ã*', 'í')
    .replace('Ã³', 'ó')
    .replace('Ãº', 'ú')
    .replace('Ã±', 'ñ')
    .replace('Ã', 'Á')
    .replace('Ã‰', 'É')
    .replace('Ã', 'Í')
    .replace('ÃÓ', 'Ó')
    .replace('ÃÚ', 'Ú')
    .replace('ÃÑ', 'Ñ')
)

print(f"Loaded text: {len(text)} chars")
