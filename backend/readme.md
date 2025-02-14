PID (идентификатор процесса), использующий порт 3000.
netstat -ano | findstr :3000

Заверши процесс с этим PID:



DROP VIEW IF EXISTS "main"."last_donation_plazm";
-- Result: запрос успешно выполнен. Заняло 0мс
-- At line 2:
CREATE VIEW "последняя_донация_плазмы" AS
 SELECT "donations"."номер_донации", "donations"."дата_донации",
 "donors"."full_name", "donations"."тип_донации", "donations"."объем_донации"
 FROM "donations" JOIN "donors"
 ON "donations"."номер_донора" = "donors"."donor_id"
 WHERE "donations"."тип_донации" = "плазма"
 ORDER BY "donations"."дата_донации" DESC
 LIMIT 1