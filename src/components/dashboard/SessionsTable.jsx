import { ChevronRight } from "lucide-react";
import { SpanStyled, HeadingStyled } from "@styles/ElementsStyled";
import { useNavigate } from "react-router-dom";

export function SessionsTable({
  rows,
  columns,
  title = "LATEST SESSIONS",
  redirect = true,
  actions = false,
  renderActions,
}) {
  const navigate = useNavigate();
  return (
    <div>
      {title && (
        <HeadingStyled $size="12px" className="text-grey text-uppercase mb-3">
          {title}
        </HeadingStyled>
      )}
      <div className="card overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="py-3 px-3 text-uppercase">
                    <SpanStyled className="text-grey-clr3">
                      {column.title}
                    </SpanStyled>
                  </th>
                ))}
                {redirect && <th></th>}
                {actions && (
                  <th className="py-3 px-3 text-uppercase">
                    <SpanStyled className="text-grey-clr3">Action</SpanStyled>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  style={{ cursor: redirect ? "pointer" : "default" }}
                  onClick={() =>
                    redirect && navigate(`/clients/session/${row.id}`)
                  }
                >
                  {columns.map((column) => (
                    <td className="py-3 px-3" key={`${column.key}-${row.id}`}>
                      <SpanStyled className="text-dark-purple-2">
                        {row[column.key]}
                      </SpanStyled>
                    </td>
                  ))}
                  {redirect && (
                    <td className="text-end py-3 pe-4">
                      <ChevronRight
                        style={{ width: "20px", height: "20px" }}
                        className="text-secondary"
                      />
                    </td>
                  )}
                  {renderActions && (
                    <td className="py-3 pe-4">{renderActions(row)}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
