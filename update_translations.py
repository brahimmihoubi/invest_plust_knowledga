#!/usr/bin/env python3
"""
Script to add comprehensive translations for all enhanced sections
This will update the i18n.ts file with new translation keys
"""

import json

# English translations to add/update
en_additions = {
    "members": {
        "badge": "Our Team",
        "title": "Members",
        "content": "Our team consists of elite talents committed to excellence and innovation in everything we provide.",
        "roles": {
            "leadership": {
                "title": "Leadership Team",
                "description": "Visionary leaders driving strategic direction and growth",
                "count": "12+"
            },
            "analysts": {
                "title": "Financial Analysts",
                "description": "Expert analysts providing deep market insights",
                "count": "35+"
            },
            "advisors": {
                "title": "Strategic Advisors",
                "description": "Seasoned advisors with global expertise",
                "count": "20+"
            },
            "operations": {
                "title": "Operations Team",
                "description": "Dedicated professionals ensuring seamless execution",
                "count": "45+"
            }
        },
        "values": {
            "excellence": {
                "icon": "⭐",
                "title": "Excellence",
                "description": "Committed to delivering exceptional results in every project"
            },
            "innovation": {
                "icon": "💡",
                "title": "Innovation",
                "description": "Embracing cutting-edge solutions and creative thinking"
            },
            "integrity": {
                "icon": "🤝",
                "title": "Integrity",
                "description": "Operating with transparency, honesty, and ethical standards"
            }
        }
    }
}

print("Translation additions prepared")
print(json.dumps(en_additions, indent=2))
