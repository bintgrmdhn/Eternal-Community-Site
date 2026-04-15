from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/story')
def story():
    stories = [
        {"title": "Hari Pertama", "content": "15 Januari 2023 - ETERNAL lahir!", "image": "story-1.jpg", "date": "2023-01-15"},
        {"title": "100 Member Pertama", "content": "Mencapai 100 member dalam 1 bulan!", "image": "story-2.jpg", "date": "2023-02-15"},
        {"title": "Event Perdana", "content": "Gathering pertama di Jakarta!", "image": "story-3.jpg", "date": "2023-04-10"},
        {"title": "1K Members", "content": "Milestone 1000 member tercapai!", "image": "story-4.jpg", "date": "2023-07-20"},
        {"title": "Sekarang", "content": "5K+ members dan terus bertumbuh!", "image": "story-5.jpg", "date": "2024-01-01"}
    ]
    return render_template('story.html', stories=stories)

@app.route('/members')
def members():
    members = [
        {
            "name": "Vassago D` Covenant", 
            "role": "Founder & CEO",
            "avatar": "vassago.jpg",
            "join_date": "2000-11-01",
            "discord_id": "vssa#6969",      # ← DISCORD TAG
            "discord_url": "https://discord.com/users/504924651659722752",  # ← REAL USER ID
            "instagram": "https://instagram.com/rizkyeternal"
        },
        {
            "name": "Sari Wulandari", 
            "role": "Co-Founder & COO", 
            "avatar": "member-sari.jpg",
            "join_date": "2023-01-20",
            "discord_id": "sari#0002",
            "discord_url": "https://discord.com/users/987654321098765432",
            "instagram": "https://instagram.com/sarieternal"
        },
        # ... tambah discord_url untuk semua member
    ]
    return render_template('members.html', members=members)

@app.route('/top-members')
def top_members():
    top_members = [
        # 🥇 TOP 3 - PODIUM
        {"rank": 1, "name": "Rizky Pratama", "points": 12500, "avatar": "member-rizky.jpg", "daily": "+250", "level": "Diamond", "discord_id": "rizky#0001", "discord_url": "https://discord.com/users/123456789012345678"},
        {"rank": 2, "name": "Sari Wulandari", "points": 9800, "avatar": "member-sari.jpg", "daily": "+180", "level": "Platinum", "discord_id": "sari#0002", "discord_url": "https://discord.com/users/987654321098765432"},
        {"rank": 3, "name": "Andi Wijaya", "points": 7500, "avatar": "member-andi.jpg", "daily": "+150", "level": "Gold", "discord_id": "andi#0003", "discord_url": "https://discord.com/users/456789123456789123"},
        
        # 🥉 4-10
        {"rank": 4, "name": "Budi Santoso", "points": 6500, "avatar": "member-budi.jpg", "daily": "+120", "level": "Gold", "discord_id": "budi#0004", "discord_url": "https://discord.com/users/789123456789123456"},
        {"rank": 5, "name": "Dewi Lestari", "points": 5800, "avatar": "member-sari.jpg", "daily": "+100", "level": "Silver", "discord_id": "dewi#0005", "discord_url": "https://discord.com/users/321654987654321987"},
        {"rank": 6, "name": "Fajar Nugroho", "points": 5200, "avatar": "member-rizky.jpg", "daily": "+90", "level": "Silver", "discord_id": "fajar#0006", "discord_url": "https://discord.com/users/147258369852147258"},
        {"rank": 7, "name": "Larasati", "points": 4800, "avatar": "member-sari.jpg", "daily": "+85", "level": "Silver", "discord_id": "laras#0007", "discord_url": "https://discord.com/users/258369741852369741"},
        {"rank": 8, "name": "Gilang Ramadhan", "points": 4500, "avatar": "member-budi.jpg", "daily": "+80", "level": "Bronze", "discord_id": "gilang#0008", "discord_url": "https://discord.com/users/369741852963741852"},
        {"rank": 9, "name": "Nadia Putri", "points": 4200, "avatar": "member-sari.jpg", "daily": "+75", "level": "Bronze", "discord_id": "nadia#0009", "discord_url": "https://discord.com/users/741852963741852963"},
        {"rank": 10, "name": "Ricky Hartono", "points": 3900, "avatar": "member-rizky.jpg", "daily": "+70", "level": "Bronze", "discord_id": "ricky#0010", "discord_url": "https://discord.com/users/852963741852963741"},
        
        # 🥉 11-20
        {"rank": 11, "name": "Sinta Dewi", "points": 3600, "avatar": "member-sari.jpg", "daily": "+65", "level": "Iron", "discord_id": "sinta#0011", "discord_url": "https://discord.com/users/963741852963741852"},
        {"rank": 12, "name": "Teguh Prasetyo", "points": 3400, "avatar": "member-budi.jpg", "daily": "+60", "level": "Iron", "discord_id": "teguh#0012", "discord_url": "https://discord.com/users/111222333444555666"},
        {"rank": 13, "name": "Umar Faruq", "points": 3200, "avatar": "member-andi.jpg", "daily": "+55", "level": "Iron", "discord_id": "umar#0013", "discord_url": "https://discord.com/users/222333444555666777"},
        {"rank": 14, "name": "Vina Sari", "points": 3000, "avatar": "member-sari.jpg", "daily": "+50", "level": "Iron", "discord_id": "vina#0014", "discord_url": "https://discord.com/users/333444555666777888"},
        {"rank": 15, "name": "Wawan Setiawan", "points": 2800, "avatar": "member-rizky.jpg", "daily": "+48", "level": "Iron", "discord_id": "wawan#0015", "discord_url": "https://discord.com/users/444555666777888999"},
        {"rank": 16, "name": "Xena Lestari", "points": 2600, "avatar": "member-sari.jpg", "daily": "+45", "level": "Bronze", "discord_id": "xena#0016", "discord_url": "https://discord.com/users/555666777888999000"},
        {"rank": 17, "name": "Yudi Kurniawan", "points": 2400, "avatar": "member-budi.jpg", "daily": "+42", "level": "Bronze", "discord_id": "yudi#0017", "discord_url": "https://discord.com/users/666777888999000111"},
        {"rank": 18, "name": "Zara Melinda", "points": 2200, "avatar": "member-andi.jpg", "daily": "+40", "level": "Bronze", "discord_id": "zara#0018", "discord_url": "https://discord.com/users/777888999000111222"},
        {"rank": 19, "name": "Agus Rahman", "points": 2000, "avatar": "member-rizky.jpg", "daily": "+38", "level": "Silver", "discord_id": "agus#0019", "discord_url": "https://discord.com/users/888999000111222333"},
        {"rank": 20, "name": "Bella Fitri", "points": 1850, "avatar": "member-sari.jpg", "daily": "+35", "level": "Silver", "discord_id": "bella#0020", "discord_url": "https://discord.com/users/999000111222333444"}
    ]
    return render_template('top_members.html', top_members=top_members)

@app.route('/gallery')
def gallery():
    gallery_images = [
        {"id": 1, "src": "gallery/event-1.jpg", "title": "Gathering 2023", "category": "event", "date": "2023-04-15"},
        {"id": 2, "src": "gallery/event-2.jpg", "title": "Tournament", "category": "event", "date": "2023-06-20"},
        {"id": 3, "src": "gallery/event-3.jpg", "title": "Annual Meetup", "category": "event", "date": "2024-01-10"},
        {"id": 4, "src": "gallery/moment-1.jpg", "title": "Team Building", "category": "moment", "date": "2023-08-05"},
        {"id": 5, "src": "gallery/moment-2.jpg", "title": "Achievement", "category": "moment", "date": "2023-10-12"},
        {"id": 6, "src": "gallery/member-1.jpg", "title": "Top Member", "category": "member", "date": "2024-02-01"},
        # ... tambah sampai 24 gambar
    ]
    return render_template('gallery.html', images=gallery_images)

@app.route('/support')
def support():
    return render_template('support.html')

if __name__ == '__main__':
    app.run(debug=True)