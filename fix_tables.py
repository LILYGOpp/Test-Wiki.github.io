#!/usr/bin/env python3
import re

# Read the file
with open('docs/get_started/en/LCD_OLED/T-Bao/T-Bao.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix tables: add <tbody> after </thead> if missing
# Pattern: </thead> followed by whitespace and <tr> (not <tbody>)
pattern = r'(</thead>)\s*\n(\s*)(<tr>)'
replacement = r'\1\n\2<tbody>\n\2\3'
content = re.sub(pattern, replacement, content)

# Add </tbody> before </table> if missing
# Pattern: </tr> followed by whitespace and </table> (not </tbody>)
pattern2 = r'(</tr>)\s*\n(\s*)(</table>)'
replacement2 = r'\1\n\2</tbody>\n\2\3'
content = re.sub(pattern2, replacement2, content)

# Write back
with open('docs/get_started/en/LCD_OLED/T-Bao/T-Bao.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed English version")

# Fix Chinese version
with open('docs/get_started/zh/LCD_OLED/T-Bao/T-Bao.md', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'(</thead>)\s*\n(\s*)(<tr>)', r'\1\n\2<tbody>\n\2\3', content)
content = re.sub(r'(</tr>)\s*\n(\s*)(</table>)', r'\1\n\2</tbody>\n\2\3', content)

with open('docs/get_started/zh/LCD_OLED/T-Bao/T-Bao.md', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed Chinese version")
